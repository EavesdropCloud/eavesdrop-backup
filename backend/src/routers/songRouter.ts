import express from 'express';
import {  getAllSongs, updateSongById } from '../controllers/songController.js';

const router = express.Router();

router.get('/', getAllSongs);
router.put('/:id', updateSongById);
//router.get('/:id', getSongById);
//router.delete('/:id', deleteSongById);

export default router;