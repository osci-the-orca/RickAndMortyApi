import { Request, Response } from "express";

export const getAllCharacters = (req: Request, res:Response) => {
    //Todo load json file and send back array of all characters
    res.status(200).json("TEST");
}

export const createCharacter = (req: Request, res: Response) => {
    //Todo create characther and send as json object.
    res.status(201).json({});
}

export const deleteCharacter = (req: Request, res: Response) => {
    res.status(204).json();
}

export const updateCharacter = (req: Request, res: Response) => {
    // Todo update object with reqbody.
    res.status(200).json({});
}