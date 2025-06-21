import { Router } from "express";

export const redirectRequestRouter = Router();

redirectRequestRouter.post("/:url", (req, res) => {
  const shortURL = req.params.url;
  console.log(shortURL);

  res.json({ msg: "successfully extracted the url" });
});
