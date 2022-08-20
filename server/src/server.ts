import express from "express";
import { charactersRouter } from "./resources/characters/characters.router";
require("express-async-errors");


const app = express();

app.use(express.json())


app.use("/",charactersRouter);

app.listen(3000, () => console.log("running on http://localhost:3000"));