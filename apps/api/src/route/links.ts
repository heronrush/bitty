import { Request, Response, Router } from "express";
import { PrismaClient } from "../../generated/prisma";

export const linkRouter = Router();

const prisma = new PrismaClient();

linkRouter.get("/api/user/:userId/links", async (req: Request, res: Response) => {
  console.log(req.params.userId);
  if (req.params.userId === "undefined" || null) {
    res.json({});
  }

  const userId = parseInt(req.params.userId);

  const links = await prisma.link.findMany({
    where: {
      userId: userId,
    },
  });

  console.log(links);

  res.json({ msg: "links fetched", links: links });
});
