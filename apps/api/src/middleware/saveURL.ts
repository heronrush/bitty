import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";
import { nanoidGenerator } from "../utils/nanoIdGenerator";

const prisma = new PrismaClient();

// constructs the full short url and saves to the db
export async function saveUserUrl(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const url: string = req.body.url;

  console.log(req.hostname);

  const nanoid = nanoidGenerator();
  let shortURL = `https://shr.inky/${nanoid}`;

  const response = await prisma.link.create({
    data: {
      originalURL: url,
      shortURL: shortURL,
    },
  });

  res.json({
    msg: "your link has been shortened",
    originalURL: url,
    shortURL: shortURL,
  });
}

/* this can be used later
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

  */
