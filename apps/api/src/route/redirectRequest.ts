import { Router } from 'express';
import { redirectRequest } from '../middleware/findURL';

export const redirectRequestRouter = Router();

redirectRequestRouter.post('/:url', redirectRequest, (req, res) => {
  const shortURL = req.params.url;

  res.json({ msg: 'successfully extracted the url' });
});
