import express from 'express';

import songRouter from './songRouter';
import fileRouter from './fileRouter';

const router = express.Router();

router.use('/songs', songRouter);

router.use('/files', fileRouter);

export default router;