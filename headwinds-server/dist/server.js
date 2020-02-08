"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const homeController = __importStar(require("./controllers/home"));
var http = require('http');
const app = express_1.default();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get("/", homeController.index);
app.get("/users", homeController.users);
app.post("/users/create", homeController.create);
var server = http.createServer(app);
var io = require('socket.io').listen(server); //pass a http.Server instance
server.listen(8080);
io.on("connect", (socket) => {
    socket.on("message", (m) => {
        console.log("[server](message): %s", JSON.stringify(m));
        io.emit("message", m);
    });
    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});
