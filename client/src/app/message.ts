export class Message {
    constructor(public from: User, public content: string) {

    }
}

export class User {
    constructor(public name: string, public avatar: string) {

    }
}
