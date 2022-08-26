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

export const createCharacter = async (req: Request, res: Response) => {

    if(!req.body.image || !req.body.image.includes(".jpg") && !req.body.image.includes(".png"))
    {
        req.body.image = "https://rickandmortyapi.com/api/character/avatar/19.jpeg";
    }
    
    characters.push(req.body);

    await saveData('./src/resources/characters/rickAndMortyData.json');
    res.status(201).json(req.body);
};

export const deleteCharacter = async (req: Request, res: Response, next: NextFunction) => {

    const character = characters.find(x=> x.id === req.params.id)

    if(character) {
        const index: number = characters.indexOf(character);

        characters.splice(index,1);

        await saveData('./src/resources/characters/rickAndMortyData.json');

        res.status(200).json(character);
    }
    else next();
};

export const updateCharacter = async (req: Request, res: Response, next: NextFunction) => {
    
    const id = req.params.id
    const character = characters.find(x => x.id === id);

    if(character){
        const index = characters.indexOf(character);

        characters[index] = {id,...req.body };

       await saveData("./src/resources/characters/rickAndMortyData.json")
        res.status(200).json(characters[index]);
    }
    else next();
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
