import express from "express";
require("express-async-errors");


const app = express();

app.listen(3000, () => console.log("running on http://localhost:3000"));