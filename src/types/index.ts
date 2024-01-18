import { Request, Response } from "express";

export type RouteType = {
  method: "get" | "post" | "put" | "patch" | "delete";
  path: string;
  handler: (req: Request, res: Response) => void;
};