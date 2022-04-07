import { Router } from 'express';
import { getAllMemes } from '../controllers/memes.js';

const memesRouter = Router();

memesRouter.route('/').get(getAllMemes);

export default memesRouter;