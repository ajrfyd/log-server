import { RouteType } from "../../types/index.js";

const accessLog: RouteType[] = [
  {
    method: "get",
    path: "/accesslog",
    handler: (req, res) => {
      res.json({
        message: 'hello'
      });
    }
  }
];

export default accessLog;