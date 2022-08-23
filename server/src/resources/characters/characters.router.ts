import express from 'express';
import { generateId, Logger } from '../../middlewares';
import { createCharacter, deleteCharacter, getAllCharacters, getCharacterById, updateCharacter, validateCharacterReqBody } from './characters.controller';

export const charactersRouter = express.Router()
.get("/", getAllCharacters)
.get("/:id", getCharacterById)
.post("/", Logger, generateId, validateCharacterReqBody, createCharacter)
.delete("/:id", deleteCharacter)
.put("/:id", Logger, validateCharacterReqBody, updateCharacter);

