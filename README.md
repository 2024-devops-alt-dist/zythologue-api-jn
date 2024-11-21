# zythologue-api-jn
This is the backend API for Zythologue, a beer and brewery management platform. Built with Node.js and powered by PostgreSQL, this project provides a robust RESTful API for managing breweries and their beers.


## Run Locally

Clone the project

```bash
  git clone git@github.com:2024-devops-alt-dist/zythologue-api-jn.git
```

Go to the project directory

```bash
  cd zythologue-api-jn
```

### Cmd for docker
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




## Authors

- [@jimni6](https://www.github.com/jimni6)


## Documentation

[PostgreSQL](https://www.postgresql.org)

[Docker](https://www.docker.com)