# Next with AntDesign ([Live Version](https://next-ant.herokuapp.com/))

[![Build Status](https://travis-ci.org/polo13999/nextAnt.svg?branch=master)](https://travis-ci.org/polo13999/nextAnt)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/polo13999/nextAnt.svg)](http://isitmaintained.com/project/polo13999/nextAnt 'Percentage of issues still open')
[![CodeFactor](https://www.codefactor.io/repository/github/polo13999/nextant/badge)](https://www.codefactor.io/repository/github/polo13999/nextant)
[![Known Vulnerabilities](https://snyk.io/test/github/polo13999/nextAnt/badge.svg)](https://snyk.io/test/github/polo13999/nextAnt)
[![BCH compliance](https://bettercodehub.com/edge/badge/polo13999/nextAnt?branch=master)](https://bettercodehub.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

AntDesign CRUD implementation built on Next.

## Stacks

* [x] [next](https://github.com/zeit/next.js/) for SSR `React`.
* [x] [apollo](https://github.com/apollographql) for `GraphQL` client.
* [x] [express](https://github.com/expressjs/express) for web framework.
* [x] [styled-components](https://github.com/styled-components/styled-components) for styling.
* [x] [ant design](https://ant.design/docs/react/introduce) for components.
* [x] [jwt](https://jwt.io/) for authentication.
* [x] [mongodb](https://www.mongodb.com/) for database.
* [x] [docker](https://www.docker.com/) for containerization.
* [x] [pm2](http://pm2.keymetrics.io/) fro clustering.
* [x] [jest](https://facebook.github.io/jest/) for testing.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

This project runs on [Node.js](https://nodejs.org/en/)

After installation, run `node -v` to make sure node installed correctly. Example

```
$ node -v
v8.9.1
```

### Installing

Run `npm install` to install all project dependencies.

### Serve Project

Run the next with the following command:

```
npm run dev
```

Once its running, head over to your browser to [see Project](http://localhost:3000/).

### Running Tests

To run the project tests, run the following command:

```
npm run test
```

### Deploy dockerized apps on Heroku

You can deploy the project on [Heroku](https://www.heroku.com/) using the following steps:

Make sure you have a working Docker installation (eg. `docker ps`) and that you’re logged in to Heroku (`heroku login`).

Log in to Container Registry:

```
heroku container:login
```

Navigate to the app’s directory and create a Heroku app:

```
heroku create
```

Build the image and push to Container Registry:

```
heroku container:push web --app {app_name}
```

Now open the app in your browser:

```
heroku open --app {app_name}
```

## Roadmap

[Roadmap](./Learn.md)

## Authors

* Polo Chi - [polo13999](https://github.com/polo13999)
* Max Li - [LIYINGZHEN](https://github.com/LIYINGZHEN)

## License

Licensed under the MIT License, Copyright © 2018-present Polo Chi and Max Li.

See [LICENSE](LICENSE.md) for more information.
