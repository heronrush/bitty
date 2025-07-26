import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";
import { nanoidGenerator } from "../utils/nanoIdGenerator";

const prisma = new PrismaClient();

// constructs the full short url and saves to the db
export async function saveUserUrl(req: Request, res: Response, next: NextFunction) {
  const url: string = req.body.url;
  const userId: number = req.body.userId;

  const nanoid = nanoidGenerator();
  let shortURL = `bitty.website/${nanoid}`;

  console.log(shortURL);
  console.log("-----------------------");

  try {
    const response = await prisma.link.create({
      data: {
        originalURL: url,
        shortURL: shortURL,
        userId: userId,
      },
    });

    res.json({
      msg: "your link has been shortened",
      originalURL: url,
      shortURL: shortURL,
    });
  } catch (err) {
    console.log("some server error occurred while creating short link");
    res.json({ msg: "some server error occurred while creating short link" });
  }
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
