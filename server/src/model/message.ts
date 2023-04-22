import {User} from './user';

export class Message {
    constructor(
        private id: number,
        private alterId: number,
        private alterContent: string,
        private reply: boolean,
        private from: User,
        private content: string) {
    }
}