import { NextFunction, Request, Response } from "express";
import { nanoid } from "nanoid";

export const generateId = (req: Request, res: Response, next: NextFunction) => {
    req.body = {id: nanoid(),...req.body};
    console.log(req.body);
    next();
}

export const Logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.path);
    console.log(req.method);
    console.log(req.body);
    next();
}

export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json("The resource do not exist.");
}

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).json(err.message);
}