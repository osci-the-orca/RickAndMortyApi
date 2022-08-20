import { Request, Response } from "express";
import { nanoid } from "nanoid";
import { characters, saveData } from "../dataHandler";
import { Character } from "./character.model";

export const getAllCharacters = (req: Request, res:Response) => {
    //Todo load json file and send back array of all characters
    res.status(200).json(characters);
};

export const createCharacter = (req: Request, res: Response) => {
    //Todo create characther and send as json object.
    const character: Character = {
        id: nanoid(),...req.body
    };

    characters.push(character);

    saveData('./src/resources/characters/rickAndMortyData.json');
    res.status(201).json(character);
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
    // Todo update object with reqbody.
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