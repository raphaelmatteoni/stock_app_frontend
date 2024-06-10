# Stock App Backend

## Description
This is a React application that calculates stock metrics based on a specified ticker and date range. It uses external services to fetch market data and performs calculations to determine maximum, minimum, and average prices, as well as maximum, minimum, and average volumes.

## Prerequisites
Docker and Docker Compose installed on your system.

## Setup
1. Clone this repository to your local environment.
2. Navigate to the project directory.
3. To build and start the necessary containers, use the following command:

```sh
docker-compose up --build
```

## Accessing the Application
Once the Docker containers are up and running, you can access your application in a web browser at:

- http://localhost:3000/stocks?ticker=AAPL&start_date=2023-01-01&end_date=2023-12-31

## Port Number
Replace 4000 with the port number specified in your Docker configuration if it's different.