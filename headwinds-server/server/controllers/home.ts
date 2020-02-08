import { Request, Response } from "express";

import { User } from '../model/user';
/* GET home page. */
export let index = (req: Request, res: Response) => {
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

export let users = (req: Request, res: Response) => {

    let users = [
        new User('James Coonce', 'jcoonce', 'james@none.com'),
        new User('Jim Coonce', 'jimcoonce', 'jim@none.com'),
        new User('Norman', 'jcoonce', 'norman@none.com'),
    ];

    res.json(users);
};

export let create = (req: Request, res: Response) => {
    let user = new User(req.body.name, req.body.username, req.body.email);
    res.json(user);
};
