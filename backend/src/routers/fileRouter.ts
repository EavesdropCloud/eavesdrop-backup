import express from 'express';

import Upload from '../config/upload.js'
import { downloadFile, uploadFile } from '../controllers/fileController.js';

const router = express.Router();

router.post('/upload', Upload.single('file'), uploadFile);
router.get('/download/:id', downloadFile);

export default router;