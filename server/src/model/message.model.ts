export class Message {
    from: string;
    content: string;

    constructor(from: string, content: string) {
        this.from = from;
        this.content = content;
    }
}