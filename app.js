// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const os = require('os');
const osUtils = require('os-utils');
const cors = require("cors");
const si = require('systeminformation');

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;
app.set('view-engine', 'ejs')
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }))

// Middleware for parsing JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Define a route for the homepage
app.get('/', (req, res) => {
    // Set a cookie with the IP address
    res.cookie("ip_to_connect_for_cpuPercent", getIPAddress());
    // Render the 'meter.ejs' template
    res.render('meter.ejs')
})

// Define a route to handle CPU percentage data
app.post('/pcpu', async (req, res) => {
    // Get CPU usage information
    osUtils.cpuUsage((cpuUsage) => {
        const cpuInfo = cpuUsage * 100;
        res.send({ cpu_usage: JSON.stringify(cpuInfo) });
    });
});

// Define a route for displaying more server details
app.get('/moreDetails', (req, res) => {
    // Set a cookie with the IP address
    res.cookie("ip_to_connect_for_cpuPercent", getIPAddress());
    const uptimeInSeconds = os.uptime();
    const data = {
        cpu: os.cpus()[0].model,
        cores: os.cpus().length,
        ip: getIPAddress()
    };
    // Render the 'serverDetail.ejs' template and pass data
    res.render('serverDetail.ejs', data);
})

// Define a route to handle additional server details
app.post('/moreDetailS', async (req, res) => {
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();

    // Calculate used memory in bytes
    const usedMemory = totalMemory - freeMemory;

    // Convert memory sizes to more human-readable units (e.g., MB or GB)
    function formatBytesToMB(bytes) {
        const megabytes = bytes / (1024 * 1024);
        return Math.round(megabytes.toFixed(2)) + ' MB';
    }

    const uptimeInSeconds = os.uptime();
    const swapData = await si.mem();

    // Display memory information
    const finalData = {
        TotalMemory: bytesToGB(totalMemory),
        UsedMemory: bytesToGB(usedMemory),
        TotalSwapMemory: bytesToGB(swapData.swaptotal),
        UsedSwapMemory: bytesToGB(swapData.swapfree),
        UpTime: uptimeInSeconds,
    };

    // Send the formatted data as the response
    res.send(finalData);
});

// Function to get the IP address
function getIPAddress() {
    const ifaces = os.networkInterfaces();
    for (const iface in ifaces) {
        const addresses = ifaces[iface];
        for (const address of addresses) {
            if (!address.internal && address.family === 'IPv4') {
                return address.address;
            }
        }
    }
    return 'Not Found';
}

// Function to convert bytes to gigabytes
function bytesToGB(bytes) {
    if (bytes === 0) return '0 GB';

    const gigabytes = bytes / (1024 * 1024 * 1024);
    const formattedGB = parseFloat(gigabytes.toFixed(1)); // Limiting to one decimal place

    return formattedGB;
}

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
