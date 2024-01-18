import express from "express";
import "./config/init.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import c from "chalk";
import { log } from "./utils/index.js";
import { getLogFile } from "./middleware/log.js";
import router from "./route/index.js";

const __filename = fileURLToPath(import.meta.url);
export const root = path.dirname(path.join(__filename, "..", ".."));

const { PORT } = process.env;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  methods: ["GET"],
  origin: ["*"]
}));

app.use(getLogFile);

app.use("/api", router.api);

app.get("/", (req, res) => {
  res.send("<h1>Welcome 2 Log server</h1>");
});

app.listen(PORT, () => {
  log(c.bgBlue(`Server Listening on PORT: ${PORT}`));
});


// dotenv.config({
//   path: path.join(__dirname, "./.env")
// });