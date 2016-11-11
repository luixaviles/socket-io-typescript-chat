import { Message } from ".";

export class ChatMessage extends Message{
    constructor(from: string, content: string) {
        super(from, content);
    }
}