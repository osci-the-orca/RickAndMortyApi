import { NextFunction, Request, Response } from "express";
import { characters, saveData } from "../dataHandler";
import { characterSchema } from "./character.model";


export const getAllCharacters = (req: Request, res: Response) => {
    res.status(200).json(characters);
};

export const getCharacterById = (req: Request, res: Response, next: NextFunction) => {
    const character = characters.find(x=> x.id === req.params.id)

    if(character) {
        res.status(200).json(character);
    }
    else next();
}

export const createCharacter = (req: Request, res: Response) => {
    
    characters.push(req.body);

    saveData('./src/resources/characters/rickAndMortyData.json');
    res.status(201).json(req.body);
};

export const deleteCharacter = (req: Request, res: Response) => {

    const character = characters.find(x=> x.id === req.params.id)

    if(character) {
        const index: number = characters.indexOf(character);

        characters.splice(index,1);

        saveData('./src/resources/characters/rickAndMortyData.json');

        res.status(200).json(character);
    }
    else res.status(404).json("no character with that id exists");
};

export const updateCharacter = (req: Request, res: Response) => {
   
    const id = req.params.id
    const character = characters.find(x => x.id === id);

    if(character){
        const index = characters.indexOf(character);

        characters[index] = {id,...req.body };

        saveData("./src/resources/characters/rickAndMortyData.json")
        res.status(200).json(characters[index]);
    }
    else res.status(404).json("no character with that id");
}

export const validateCharacterReqBody = (req: Request, res: Response, next: NextFunction) => {
    const result = characterSchema.validate(req.body);

    if(result.error) {
        res.status(400).json(result.error.message);
    }
    else {
        next();
    }
};
