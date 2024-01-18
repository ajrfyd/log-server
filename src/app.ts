import express from "express";
import "./config/init.js";
import cors from "cors";
import c from "chalk";
import { log, __dirname } from "./utils/index.js";

// dotenv.config({
//   path: path.join(__dirname, "./.env")
// });

const { PORT } = process.env;
const app = express();

app.use(cors({
  methods: ["GET"],
  origin: ["*"]
}));

app.get("/", (req, res) => {
  log(c.bgCyan(__dirname));
  res.send("<h1>Welcome!!</h1>");
});

app.listen(PORT, () => {
  log(c.bgBlue(`Server Listening on PORT: ${PORT}`));
});