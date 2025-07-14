import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

export async function redirectRequest(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const userShortURL = req.params.url;

  let shortURL = `bitty.website/${userShortURL}`;

  let response: { originalURL: string } | null;

  try {
    response = await prisma.link.findFirst({
      where: {
        shortURL,
      },
      select: {
        originalURL: true,
      },
    });

    res.status(200).json({ originalURL: response?.originalURL });
  } catch (err) {
    console.log(err);
    res.json({ msg: "NOT FOUND" });
  }
}
