// Get elements by their IDs
const l1 = document.getElementById("l1-1");
const l2 = document.getElementById("l1-2");
const l3 = document.getElementById("l1-3");
const l4 = document.getElementById("l2-1");
const l5 = document.getElementById("l2-2");
const l6 = document.getElementById("l3-1");
const l7 = document.getElementById("l3-2");

const e1l1 = document.getElementById("e1l1");
const e1l2 = document.getElementById("e1l2");
const e2l1 = document.getElementById("e2l1");
const e2l2 = document.getElementById("e2l2");

const el_mem = document.getElementById("mem");
const el_uptime = document.getElementById("upptm");

const boddyy = document.getElementById("boddyy");

// Function to get a cookie by name
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Retrieve the IP to connect for CPU percentage from the cookie
ipToConect = getCookie("ip_to_connect_for_cpuPercent")

// Constants for on and off states
const on = true;
const off = false;

// Function to set the appearance based on the state (on/off)
function setOnOf(element, on) {
    // Check element ID and set styles accordingly
    if (element.id == "l1-1" || element.id == "l1-3") {
        // Styles for l1-1 and l1-3
        if (on) {
            element.style.background = "#3BE3B3";
            element.style.boxShadow = "1px 1px 10px -1px rgba(59, 227, 179, 0.40)";
        } else {
            element.style.background = "rgba(119, 119, 119, 0.20)";
            element.style.boxShadow = "0px 0px 0px 0px";
        }
    }

    if (element.id == "l1-2" || element.id == "l3-2") {
        // Styles for l1-2 and l3-2
        if (on) {
            element.style.background = "#EF4B56";
            element.style.boxShadow = "1px 1px 10px -1px rgba(239, 75, 86, 0.40)";
        } else {
            element.style.background = "rgba(119, 119, 119, 0.20)";
            element.style.boxShadow = "0px 0px 0px 0px";
        }
    }

    if (element.id == "l3-1" || element.id == "l2-2") {
        // Styles for l3-1 and l2-2
        if (on) {
            element.style.background = "#F3E07E";
            element.style.boxShadow = "1px 1px 10px -1px rgba(243, 224, 126, 0.40)";
        } else {
            element.style.background = "rgba(119, 119, 119, 0.20)";
            element.style.boxShadow = "0px 0px 0px 0px";
        }
    }

    if (element.id == "l2-1") {
        // Styles for l2-1
        if (on) {
            element.style.background = "#FFF";
            element.style.boxShadow = "1px 1px 10px -1px rgba(255, 255, 255, 0.40)";
        } else {
            element.style.background = "rgba(119, 119, 119, 0.20)";
            element.style.boxShadow = "0px 0px 0px 0px";
        }
    }

    if (element.id == "e1l1" || element.id == "e2l1") {
        // Styles for e1l1 and e2l1
        if (on) {
            element.style.background = "#C9A445";
            element.style.boxShadow = "1px 1px 10px -1px rgba(201, 164, 69, 0.40)";
        } else {
            element.style.background = "rgba(119, 119, 119, 0.20)";
            element.style.boxShadow = "0px 0px 0px 0px";
        }
    }

    if (element.id == "e1l2" || element.id == "e2l2") {
        // Styles for e1l2 and e2l2
        if (on) {
            element.style.background = "#45C97B";
            element.style.boxShadow = "1px 1px 10px -1px rgba(69, 201, 123, 0.40)";
        } else {
            element.style.background = "rgba(119, 119, 119, 0.20)";
            element.style.boxShadow = "0px 0px 0px 0px";
        }
    }
}


// Initial setup for some elements
setOnOf(l1, on);
setOnOf(e1l1, on);
setOnOf(e2l1, on);

// Asynchronous function to fetch and update CPU and memory details
setTimeout(function () {
    var cpu_p = 0;
    setInterval(async function myFunction() {
        var cpu_usage = Math.floor(Math.random() * 101)
        cpu_p = cpu_usage
    }, 3000)

    // Set intervals for updating element states based on CPU percentage
    setInterval(function myFunction() {
        if (cpu_p <= 33) {

            // Styles for low CPU usage
            var r1 = Math.random() < 0.9;
            var r2 = Math.random() < 0.9;
            var r3 = Math.random() < 0.1;
            var r4 = Math.random() < 0.92;
            var r01 = Math.random() < 0.9;
            var r02 = Math.random() < 0.9;

            // Setting state
            setOnOf(e1l2, r1);
            setOnOf(e2l2, r2);
            setOnOf(l3, r4);
            setOnOf(l2, r3);

            setOnOf(l6, r02);
            setOnOf(l7, r01);
        }

        // Additional styles for other elements regardless of CPU usage
        var r3 = Math.random() < 0.8;
        var r4 = Math.random() < 0.8;
        setOnOf(l4, r3);
        setOnOf(l5, r4);

    }, 110)

    setInterval(function myFunction() {
        if (cpu_p > 33 && cpu_p <= 66) {
            // console.log("mid");

            var r1 = Math.random() < 0.7;
            var r2 = Math.random() < 0.7;
            var r3 = Math.random() < 0.2;
            var r4 = Math.random() < 0.85;
            var r01 = Math.random() < 0.7;
            var r02 = Math.random() < 0.7;

            setOnOf(e1l2, r1);
            setOnOf(e2l2, r2);
            setOnOf(l3, r4);
            setOnOf(l2, r3);

            setOnOf(l6, r02);
            setOnOf(l7, r01);
        }
    }, 95)

    setInterval(function myFunction() {
        if (cpu_p > 66) {
            // console.log("high");

            var r1 = Math.random() < 0.5;
            var r2 = Math.random() < 0.5;
            var r3 = Math.random() < 0.3;
            var r4 = Math.random() < 0.6;
            var r01 = Math.random() < 0.5;
            var r02 = Math.random() < 0.5;

            setOnOf(e1l2, r1);
            setOnOf(e2l2, r2);
            setOnOf(l3, r4);
            setOnOf(l2, r3);

            setOnOf(l6, r02);
            setOnOf(l7, r01);
        }
    }, 80)

    // Interval to fetch and update memory details
    setInterval(function myFunction() {
        const data = {};
        fetch(`http://${ipToConect}:3000/moreDetailS`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify(data),
        })
            .then((response) => response.json()).then((data) => {

                // Update memory details based on the fetched data
                let percent = Math.floor((data.UsedMemory / data.TotalMemory) * 100)
                let totalpercent = Math.floor(((data.UsedMemory + data.UsedSwapMemory) / (data.TotalMemory + data.TotalSwapMemory)) * 100)
                // let totalpercent = Math.random() < 0.5

                document.getElementById('mem').innerText = `${percent}% (${data.UsedMemory}/${data.TotalMemory} GB)`;
                document.getElementById('totalmem').innerText = `${totalpercent}% (${(data.UsedMemory + data.UsedSwapMemory).toFixed(1)}/${data.TotalMemory + data.TotalSwapMemory} GB)`;
            })
            .catch((error) => { console.error('Error:', error) })
    }, 1000)

}, 900);

// Fetch and update initial CPU and memory details
const data = {};
fetch(`http://${ipToConect}:3000/moreDetailS`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', },
    body: JSON.stringify(data),
})
    .then((response) => response.json()).then((data) => {
        // Update memory details based on the fetched data
        let percent = Math.floor((data.UsedMemory / data.TotalMemory) * 100)
        let totalpercent = Math.floor(((data.UsedMemory + data.UsedSwapMemory) / (data.TotalMemory + data.TotalSwapMemory)) * 100)

        document.getElementById('mem').innerText = `${percent}% (${data.UsedMemory}/${data.TotalMemory} GB)`;
        document.getElementById('totalmem').innerText = `${totalpercent}% (${data.UsedMemory + data.UsedSwapMemory}/${data.TotalMemory + data.TotalSwapMemory} GB)`;

        // Set initial time in seconds
        let currentTime = data.UpTime;

        function updateClock() {
            const days = Math.floor(currentTime / (60 * 60 * 24));
            const hours = Math.floor((currentTime % (60 * 60 * 24)) / (60 * 60));
            const minutes = Math.floor((currentTime % 3600) / 60);
            const seconds = currentTime % 60;

            // Format the time as HH:MM:SS
            const formattedTime = `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

            // Display the time in the #clock element
            document.getElementById('clock').innerText = formattedTime;

            // Update the current time for the next second
            currentTime++;

            // Call the function again after 1000 milliseconds (1 second)
            setTimeout(updateClock, 1000);
        }

        // Initial call to start the clock
        updateClock();
    })
    .catch((error) => { console.error('Error:', error) })

// end
