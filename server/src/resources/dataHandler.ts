import fs from "fs";
import { Character } from "./characters/character.model";

export let characters: Character[] =  [];

export function readData(filePath: string, callback: Function) {
    fs.readFile(filePath, 'utf-8', (err, fileData) => {
        if(err) {
            return callback && callback(err)
        }
        else {
            try {
                const object = JSON.parse(fileData);
                return callback && callback(null, object);
            }
            catch {
                return callback && callback(err);
            }
        }
    })
};

readData("./src/resources/characters/rickAndMortyData.json", (err: string, data: Character[]) => {
    if(err) {
        console.log(err);
    }
    else {
        characters.push(...data)
    }
})