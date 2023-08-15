import express from 'express';

const router = express.Router();

//TODO: Setup file uploading/downloading routes
router.get('/', async (req, res) => {
    res.send("Hello World!");
})

export default router