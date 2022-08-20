import express from 'express';
import { createCharacter, deleteCharacter, getAllCharacters, updateCharacter } from './characters.controller';

export const charactersRouter = express.Router()
.get("/", getAllCharacters)
.post("/", createCharacter)
.delete("/:id", deleteCharacter)
.put("/:id", updateCharacter);

