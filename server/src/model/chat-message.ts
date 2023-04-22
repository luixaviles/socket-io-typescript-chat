import {Message, User} from './';

export class ChatMessage extends Message {
    constructor(id: number,
                alterId: number,
                alterContent: string,
                reply: boolean,
                from: User,
                content: string) {
        super(id, alterId, alterContent, reply, from, content);
    }
}