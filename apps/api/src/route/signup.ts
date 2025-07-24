import { Request, Response, Router } from "express";
import {
  createNewUser,
  emailAlreadyExists,
  validateSignupData,
} from "../middleware/signupMiddleware";

export const signupRouter = Router();

signupRouter.post(
  "/api/signup",
  validateSignupData,
  emailAlreadyExists,
  createNewUser,
  (req: Request, res: Response) => {
    res.json({ msg: "signup successful" });
  }
);
