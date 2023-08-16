import express from 'express';

import Upload from '../config/upload.js'
import { uploadFile } from '../controllers/fileController.js';

const router = express.Router();

router.post('/upload', Upload.single('file'), uploadFile);

export default router;