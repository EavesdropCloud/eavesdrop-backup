import express from 'express';
import { getAllSongs, getSongById } from '../controllers/songController';

const router = express.Router();

router.get('/', getAllSongs);
router.get('/:id', getSongById);

export default router;