import express from 'express';
import {  getAllSongs } from '../controllers/songController.js';

const router = express.Router();

router.get('/', getAllSongs);
//router.get('/:id', getSongById);
//router.delete('/:id', deleteSongById);

export default router;