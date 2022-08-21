import express from "express";
require("express-async-errors");

import { errorHandler, notFoundHandler } from "./middlewares";
import { charactersRouter } from "./resources/characters/characters.router";


const app = express();

app.use(express.json())


app.use("/",charactersRouter);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(3000, () => console.log("running on http://localhost:3000"));