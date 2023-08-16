import { Request, Response } from 'express';
import { parseFile } from 'music-metadata';

import FileModel, { File } from '../models/FileModel.js';
import SongModel, { Song } from '../models/SongModel.js';

export const uploadFile = async (req: Request, res: Response) => {
    const metadata = await parseFile(req.file.destination + "/" + req.file.filename)

    const file: File = await FileModel.create({
        originalName: req.file.originalname,
        storedName: req.file.filename,
        location: req.file.destination
    });

    const song: Song = await SongModel.create({
        title: metadata.common.title || "Unknown Artist",
        artist: metadata.common.artist || "Unkown Title"
    })

    res.status(201).json({ file, song })
};