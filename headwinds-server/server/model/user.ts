export class User {

    username: String;
    name: String;
    email: String;

    constructor(name: String, username: String, email: String) {
        this.name = name;
        this.username = username;
        this.email = email;
    }

    getUsername() {
        return this.username;
    }
    getName() {
        return this.name;
    }
}