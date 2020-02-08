import express from "express";
import bodyParser from "body-parser";


// Controllers (route handlers)
import * as homeController from "./src/controllers/home";

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.get('/', homeController.index);
server.get('/users', homeController.users);
server.post('/users/create', homeController.create);

server.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});