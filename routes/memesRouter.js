import { Router } from 'express';
import { getAllMemes,createMeme, getSingleMeme, updateMeme, deleteMeme } from '../controllers/memes.js';

const memesRouter = Router();

memesRouter.route('/').get(getAllMemes).post(createMeme);
memesRouter.route('/:id').get(getSingleMeme).put(updateMeme).delete(deleteMeme)

export default memesRouter;