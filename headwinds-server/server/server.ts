import express from "express";
import bodyParser from "body-parser";
import { Message } from "./model";
import * as homeController from "./controllers/home";

var http = require('http');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", homeController.index);
app.get("/users", homeController.users);
app.post("/users/create", homeController.create);

var server = http.createServer(app);
var io = require('socket.io').listen(server);  //pass a http.Server instance
server.listen(8080); 

io.on("connect", (socket: any) => {
  socket.on("message", (m: Message) => {
    console.log("[server](message): %s", JSON.stringify(m));
    io.emit("message", m);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});
