import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import c from "chalk";
import { log, __dirname } from "./utils/index.js";

dotenv.config({
  path: path.join(__dirname, "./.env")
});

const { PORT } = process.env;
const app = express();


app.listen(PORT, () => {
  log(c.bgBlue(`Server Listening on PORT: ${PORT}`));
});