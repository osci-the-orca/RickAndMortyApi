import express from 'express';
import { generateId } from '../../middlewares';
import { createCharacter, deleteCharacter, getAllCharacters, getCharacterById, updateCharacter, validateCharacterReqBody } from './characters.controller';

export const charactersRouter = express.Router()
.get("/", getAllCharacters)
.get("/:id", getCharacterById)
.post("/",generateId, validateCharacterReqBody, createCharacter)
.delete("/:id", deleteCharacter)
.put("/:id", validateCharacterReqBody, updateCharacter);

