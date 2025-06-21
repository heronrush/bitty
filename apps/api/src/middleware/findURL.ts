import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

async function redirectRequest(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const userShortURL = req.params.url;

  const shortURL = `http`;
}
