import { Request, Response } from "express";
import { nanoid } from "nanoid";
import { characters } from "../dataHandler";
import { Character } from "./character.model";

export const getAllCharacters = (req: Request, res:Response) => {
    //Todo load json file and send back array of all characters
    res.status(200).json(characters);
}

export const createCharacter = (req: Request, res: Response) => {
    //Todo create characther and send as json object.
    const character: Character = {
        id: nanoid(),...req.body
    };

    res.status(201).json(character);
}

export const deleteCharacter = (req: Request, res: Response) => {
    res.status(204).json();
}

export const updateCharacter = (req: Request, res: Response) => {
    // Todo update object with reqbody.
    res.status(200).json({});
}