
# zythologue-api-jn

This is the backend API for Zythologue, a beer and brewery management platform. Built with Node.js and powered by PostgreSQL, this project provides a robust RESTful API for managing breweries and their beers.

## Features

- Manage breweries and beers
- RESTful API endpoints
- PostgreSQL database integration
- Docker support for containerization
- Swagger documentation for API

### Set Up the Database

First, clone and run the database repository:

```bash
git clone git@github.com:2024-devops-alt-dist/zythologue-jn.git
cd zythologue-jn
docker-compose up -d
```

## Run Locally

Clone the project

```bash
git clone git@github.com:2024-devops-alt-dist/zythologue-api-jn.git
```

Go to the project directory

```bash
cd zythologue-api-jn
```

Install dependencies

```bash
npm install
```

Create a `.env` file in the root directory and add your database configuration:

```env
DB_USER=your_db_user
DB_HOST=your_db_host
DB_NAME=your_db_name
DB_PASSWORD=your_db_password
DB_PORT=your_db_port
```

Start the server

```bash
npm start
```

### Docker

Remove the docker image 'zythologue-api-jn' even if running

```bash
docker rm -f zythologue-api-jn
```

Build the docker image

```bash
docker build -t zythologue-api-jn .
```

Run the docker image using a specified network

```bash
docker run --name zythologue-api-jn --network=simplon-local --env-file .env -p 3000:3000 zythologue-api-jn
```

## API Documentation

The API documentation is available at `/api-docs` when the server is running.

## Authors

- [@jimni6](https://www.github.com/jimni6)

## Documentation

- [PostgreSQL](https://www.postgresql.org)
- [Docker](https://www.docker.com)
```

This `README.md` file provides an overview of the project, instructions for running it locally, Docker commands, and links to relevant documentation.