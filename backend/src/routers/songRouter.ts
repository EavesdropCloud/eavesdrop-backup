import express from 'express';
import { getAllSongs } from '../controllers/songController';

const router = express.Router();

router.get('/', getAllSongs);

export default router;