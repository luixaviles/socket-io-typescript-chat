import {User} from './user';

export class Message {
    from: User;
    content: string;

    constructor(from: User, content: string) {
        this.from = from;
        this.content = content;
    }
}