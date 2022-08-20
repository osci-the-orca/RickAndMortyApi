import express from 'express';
import { createCharacter, deleteCharacter, getAllCharacters } from './characters.controller';

export const charactersRouter = express.Router()
.get("/", getAllCharacters)
.post("/", createCharacter)
.delete("/", deleteCharacter);

