import z from "zod/v4";
import { NextFunction, Request, Response } from "express";

// the schema, the url should adhere to
const urlSchema = z.url();

export function validateURL(req: Request, res: Response, next: NextFunction) {
  const url = req.body.url;

  const response = urlSchema.safeParse(url);

  if (response.success) {
    next();
  } else {
    res.json({ msg: "provide a valid url format" });
  }
}
