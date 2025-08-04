import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { PrismaClient } from "../../generated/prisma";
import { hashPassword } from "../utils/passwordHash";
import bcrypt from "bcrypt";
import { ResponseStatus } from "../utils/statusCodes";

const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

const prisma = new PrismaClient();

// middleware to check if the user has provided correct login details or not
export async function validateLoginData(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;

  const response = loginSchema.safeParse({ email, password });

  if (response.success) {
    next();
  } else {
    res.json({ msg: "invalid login data provided" });
  }
}

// middleware to check if the user is already in the db, if yes then run next middleware
export async function userExists(req: Request, res: Response, next: NextFunction) {
  const { email } = req.body;

  try {
    const userIsPresent = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (userIsPresent) {
      next();
    } else {
      res.json({ msg: "user with provided email not found" });
    }
  } catch (err) {
    console.log(err);
  }
}

// checks if the hashed password from the db and the user-provided password compares or not
export async function checkPassword(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (user) {
      const isPasswordSame = await bcrypt.compare(password, user.password);

      if (isPasswordSame) {
        res.json({ msg: "login successful", userId: user.id });
      } else {
        console.log("password is incorrect");
        res.json({ msg: "password is incorrect" });
      }
    }
  } catch (err) {
    console.log(err);
  }
}
