import express from 'express'
import { uploadImages,downloadImages } from '../controler/images-controler.js';
import upload from '../utilis/upload.js';

const router = express.Router();

router.post('/upload',upload.single('file'),uploadImages);
router.get('/file/:fileId',downloadImages);

export default router;