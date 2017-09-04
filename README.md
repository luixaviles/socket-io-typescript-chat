<p align="center">
    <a href="https://github.com/luixaviles/socket-io-typescript-chat">
        <img src="https://img.shields.io/github/stars/luixaviles/socket-io-typescript-chat.svg?style=social&label=Star" alt="GitHub stars">
    </a>
    <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fgithub.com%2Fluixaviles%2Fsocket-io-typescript-chat&via=luixaviles&text=Take%20a%20look%20this%20%23TypeScript%20chat%20project%20using%20%23Node%20and%20%23Angular%20Material">
        <img src="https://img.shields.io/twitter/url/https/github.com/luixaviles/socket-io-typescript-chat.svg?style=social" alt="Tweet">
    </a>
</p>

A Socket.io Chat Example Using TypeScript
=========================================

This repository contains server & client side code using `TypeScript` language

## Blog Post
Read the blog post about the release of this project: [Releasing v1.0.0 of a Socket.io-TypeScript Chat Project](https://luixaviles.com/2017/09/releasing-socket-io-typescript-chat-project) 

## Live Demo
Try live demo: [https://typescript-chat.firebaseapp.com](https://typescript-chat.firebaseapp.com)

# Support this project
- Star GitHub repository :star:
- Create pull requests, submit bugs or suggest new features
- Follow updates on [Twitter](https://twitter.com/luixaviles)

![](https://luixaviles.com/assets/images/posts/typescript-chat/typescript-chat.gif?raw=true)

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
