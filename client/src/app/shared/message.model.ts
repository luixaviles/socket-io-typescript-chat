import {User} from './user.model'

export class Message {
    constructor(public from: User, public content: string) {

    }
}