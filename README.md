<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Restaurants API

A Nest app to look for the nearest restaurants, login and search for the restaurants closer to a defined location, according to latitude and longitude. You will have access to historic of your searchs.

> [!IMPORTANT]
> Node Version 18.x

## Development

> [!NOTE]
> This application uses [Google Places API](https://developers.google.com/maps/documentation/?hl=es_419#places)
> You will need an `API_KEY` for the variable `PLACES_API_KEY` in .env file


### Environment Variables

```bash
$ cp .env.example .env
```

### Docker Compose

You can use docker compose to run the project with a Postgres Database, executing
```bash
$ docker compose up -d --build
```

### Development without **Docker**

#### Install Dependencies

```bash
$ yarn install
```

#### Migrations

##### Generate
> [!NOTE]
> Define `npm_config_name` env variable as the name for the migration
> Ex export npm_config_name = AddMockTable

And execute

```bash
$ yarn run migration:generate
```

##### Run

```bash
$ yarn run migration:run
```

#### Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

#### Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Documentation

For testing purposes, you can use a Postman collection to test endpoints. It is published online [here](https://documenter.getpostman.com/view/16153868/2sA3drGZX4).

## Stay in touch

- Author - [Juan Sebastian Bravo Meneses](https://github.com/juansebasdev)
- Website - [https://linkdedin.com/in/juansebasbravo](https://nestjs.com/)
- Twitter - [@juansebasdev](https://twitter.com/juansebasdev)

## License

Nest is [MIT licensed](LICENSE).
