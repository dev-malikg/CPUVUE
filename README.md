# Futuristic CPU Percent Measuring Web App

![CPU Meter](cpu-meter.png)

This futuristic web application measures CPU percent using Node.js, Express.js, and EJS. It fetches real-time CPU usage percentage through a POST request to the server and displays it in a visually appealing meter format on the web page.

## Features

- Real-time monitoring of CPU usage percentage.
- Futuristic and visually appealing meter-style visualization.
- Easy-to-use web interface.

## Technologies Used

- Node.js: A JavaScript runtime for server-side development.
- Express.js: A web application framework for Node.js.
- EJS (Embedded JavaScript): A templating engine for rendering dynamic content in HTML.
- os-utils: A Node.js library for gathering system-level information, including CPU usage.

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager) should be installed on your system.

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/cpu-monitor-web-app.git

## Starting the Server

To start the server, run the following command in your terminal:
 ```bash npm start ```

## Accessing the Web App

Open your web browser and navigate to http://localhost:3000 to access the web app.

## CPU Monitoring

Real-time CPU usage is displayed in a futuristic meter. The meter updates regularly to reflect changes in CPU usage.

## Customization

To customize the CPU meter's appearance and behavior, modify the EJS template (views/index. js) and the associated CSS and JavaScript files.

## API Endpoint
To programmatically fetch CPU percentage through a POST request, use the /cpu-percent endpoint. Send a POST request to this endpoint, and the server will respond with the current CPU usage percentage in JSON format.

## Stopping the Server

To stop the server, simply press Ctrl + C in the terminal where the server is running.

## Usage

You can now:

- Monitor CPU usage in a futuristic way using the web app.
- Programmatically fetch CPU percentages using the provided API endpoint.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

Special thanks to the Node.js and Express.js communities for providing excellent tools for web development. This project was inspired by futuristic user interfaces and system monitoring dashboards.

## Author

- Gaurav Malik
- GitHub: [Your GitHub Profile](https://github.com/dev-malikg)


