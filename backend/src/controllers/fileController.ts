import { Request, Response } from 'express';
import { parseFile } from 'music-metadata';
import path from 'path';

import FileModel, { File } from '../models/FileModel.js';
import SongModel, { Song } from '../models/SongModel.js';

export const uploadFile = async (req: Request, res: Response) => {
    const filePath = path.join(req.file.destination, req.file.filename)
    const metadata = await parseFile(filePath);

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

export const downloadFile = async (req: Request, res: Response) => {
    const fileId = req.params.id;
    const file: File | null = await FileModel.findById(fileId);

    if (!file) {
        return res.status(404).json({ error: "File not found" });
    }

    const filePath = path.join(file.location, file.storedName);
    res.download(filePath, file.originalName);
};