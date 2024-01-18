import express from "express";
import accessLog from "./access.js";
import errorLog from "./error.js";

const apiRouter = express.Router();

const routers = [...accessLog, ...errorLog];

routers.forEach(({ method, path, handler }) => {
  apiRouter[method](`${path}`, handler);
});


export default apiRouter;