import express from 'express';

import songRouter from './songRouter.js';
import fileRouter from './fileRouter.js';

const router = express.Router();

router.use('/songs', songRouter);

router.use('/files', fileRouter);

export default router;