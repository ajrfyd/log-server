import { Request, Response, NextFunction } from "express";
import fs from "fs";
import { square } from "../utils/index.js";

export const getLogFile = (req: Request, res: Response, next: NextFunction) => {
  next();
};