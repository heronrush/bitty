import { Router } from "express";
import { validateURL } from "../middleware/validateURL";
import { saveUserUrl } from "../middleware/saveURL";

export const linkShortenerRouter = Router();

linkShortenerRouter.post("/api/short", validateURL, saveUserUrl, (req, res) => {
  res.json({
    msg: "your link has been shortened",
  });
});
