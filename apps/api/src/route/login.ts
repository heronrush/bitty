import { Request, Response, Router } from "express";
import { checkPassword, userExists, validateLoginData } from "../middleware/loginMiddleware";
import { PrismaClient } from "../../generated/prisma";

export const loginRouter = Router();

loginRouter.post(
  "/api/login",
  validateLoginData,
  userExists,
  checkPassword,
  (req: Request, res: Response) => {
    res.json({ msg: "login successful" });
  }
);
