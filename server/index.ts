import * as express from "express";
import * as http from "http";
import * as socketIo from "socket.io";

class Server {
    public app: any;
    private server: any;
    private io: any;
    private port: number;

    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {
        this.createApp();
        this.config();
        this.createServer();
        this.sockets();
        this.listen();
    }

    private createApp(): void {
        this.app = express();
    }

    private createServer(): void {
        this.server = http.createServer(this.app);
    }

    private config(): void {
        this.port = process.env.PORT || 8080;
    }

    private sockets(): void {
        this.io = socketIo(this.server);
    }

    private listen(): void {
        this.server.listen(this.port, () => {
            console.log('Running server');
        });

        this.io.on('connection', (socket) => {
            console.log('==> Connected client on port %s.', this.port);
            socket.on('message', (message) => {
                console.log('[server](message): %s', message);
                this.io.emit('message', message);
            })
        });
    }
}

let server = Server.bootstrap();
export = server.app;