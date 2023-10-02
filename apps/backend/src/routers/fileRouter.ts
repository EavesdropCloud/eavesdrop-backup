import express from 'express';

import Upload from '../config/upload.js'
import { deleteFileById, downloadFile, uploadSongFile } from '../controllers/fileController.js';

const router = express.Router();

router.post('/upload', Upload.single('file'), uploadSongFile);
router.get('/download/:id', downloadFile);
router.delete('/:id', deleteFileById);

export default router;