import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { PrismaClient } from "../../generated/prisma";
import { hashPassword } from "../utils/passwordHash";

const signupSchema = z.object({
  email: z.string(),
  password: z.string(),
});

const prisma = new PrismaClient();

// middleware to check if the user has provided correct signup details or not
export async function validateSignupData(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;

  const response = signupSchema.safeParse({ email, password });

  if (response.success) {
    next();
  } else {
    res.json({ msg: "invalid signup data provided" });
  }
}

// middleware to check if the email is already in the db
export async function emailAlreadyExists(req: Request, res: Response, next: NextFunction) {
  const { email } = req.body;

  try {
    const userIsPresent = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (userIsPresent) {
      console.log("provide a new email for signup, user already exists with the same email");
      res.json({ msg: "provide a new email for signup, user already exists with the same email" });
    } else {
      next();
    }
  } catch (err) {
    return;
    console.log(err);
  }
}

// middleware to create new user and save the details to the db
export async function createNewUser(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;

  const hashedPassword = await hashPassword(password);

  try {
    const newUser = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
      },
    });

    if (newUser) {
      console.log("new user created successfully");
      console.log(newUser.id);
      res.json({ userId: newUser.id, msg: "signup successful" });
    }
  } catch (err) {
    res.json({ msg: "could not create new user" });
    console.log("some error occured while creating new user");
  }
}
