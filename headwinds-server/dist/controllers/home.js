"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../model/user");
/* GET home page. */
exports.index = (req, res) => {
    let languages = [
        {
            language: 'Spanish'
        },
        {
            language: "French"
        },
        {
            langauge: "German"
        }
    ];
    res.json(languages);
};
exports.users = (req, res) => {
    let users = [
        new user_1.User('James Coonce', 'jcoonce', 'james@none.com'),
        new user_1.User('Jim Coonce', 'jimcoonce', 'jim@none.com'),
        new user_1.User('Norman', 'jcoonce', 'norman@none.com'),
    ];
    res.json(users);
};
exports.create = (req, res) => {
    let user = new user_1.User(req.body.name, req.body.username, req.body.email);
    res.json(user);
};
