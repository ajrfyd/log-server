import { RouteType } from "../../types/index.js";

const errorLog: RouteType[] = [
  {
    method: "get",
    path: "/errorlog",
    handler: (req, res) => {
      res.json({
        message: "ok",
      })
    },
  }  
];

export default errorLog;