import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

export async function redirectRequest(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const userShortURL = req.params.url;

  let shortURL = `http://shr.inky/${userShortURL}`;

  const response = await prisma.link.findFirst({
    where: {
      shortURL,
    },
    select: {
      originalURL: true,
    },
  });

  if (response?.originalURL) {
    res.json({ originalURL: response.originalURL });
  } else {
    res.status(404).json({ msg: "NOT FOUND" });
  }
}
