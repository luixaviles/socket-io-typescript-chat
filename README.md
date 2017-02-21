A socket.io Chat Example Using TypeScript
=========================================

This repository contains server & client side code using `TypeScript` language

## Slides
Read the slides I presented with this project: [TypeScript on the Web: Real Time Applications with Node.js and Angular 2](https://luixaviles.github.io/socket-io-typescript-chat)

## Demo Chat application online
Client application was written using Angular 2 + [Material Components](https://material.angular.io/).
You can open several browser windows to start the communication between different clients and socket.io server.
Try the [Live Demo Client](https://goo.gl/BpGvpD)

# Support this project
- Star GitHub repository :star:
- Create pull requests, submit bugs or suggest new features
- Follow updates on [Twitter](https://twitter.com/luixaviles)

# Running Server and Client locally
## Prerequisites

First, ensure you have the following installed:

1. NodeJS - Download and Install latest version of Node: [NodeJS](http://http://nodejs.org)
2. Git - Download and Install [Git](http://git-scm.com)
3. Angular CLI - Install Command Line Interface for Angular [https://cli.angular.io/](https://cli.angular.io/)

After that, use `Git bash` to run all commands if you are on Windows platform.

## Clone repository

In order to start the project use:

```bash
$ git clone https://github.com/luixaviles/socket-io-typescript-chat.git
$ cd socket-io-typescript-chat
```

## Run Server

To run server locally, just install dependencies and run `gulp` task to create a build:

```bash
$ cd server
$ npm install -g gulp-cli
$ npm install
$ gulp build
$ npm start
```


The `socket.io` server will be running on port `8080`

## Run Angular Client

Open other command line window and run following commands:

```bash
$ cd client
$ npm install
$ ng serve
```

Now open your browser in following URL: [http://localhost:4200](http://localhost:4200/)

## License

MIT
