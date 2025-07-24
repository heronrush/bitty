// this file imports all the route and uses them as middleware and exports them to be used by index.ts or the main route

import { Router } from "express";
import { linkShortenerRouter } from "./shortenURL";
import { redirectRequestRouter } from "./redirectRequest";
import { signupRouter } from "./signup";
import { loginRouter } from "./login";

export const rootRouter = Router();

rootRouter.use(linkShortenerRouter);
rootRouter.use(redirectRequestRouter);
rootRouter.use(signupRouter);
rootRouter.use(loginRouter);
