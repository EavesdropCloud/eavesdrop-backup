import { Request, Response } from 'express';
import { parseFile } from 'music-metadata';
import path from 'path';
import fs from 'fs';
import { Types } from 'mongoose';

import FileModel, { File } from '../models/files/FileModel.js';
import SongFileModel, { Song } from '../models/files/SongFileModel.js';


export const uploadSongFile = async (req: Request, res: Response) => {
    const filePath = path.join(req.file.destination, req.file.filename);
    const metadata = await parseFile(filePath);

    const song: Song = await SongFileModel.create({
        metadata: {
            title: metadata.common.title || "Unknown Artist",
            artist: metadata.common.artist || "Unkown Title"
        },
        originalName: req.file.originalname,
        storedName: req.file.filename,
        location: req.file.destination,
    });

    res.status(201).json({ song });
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

export const deleteFileById = async (req: Request, res: Response) => {
    const fileId = req.params.id;
    const file: File | null = await FileModel.findByIdAndDelete(fileId);

    if (!file) {
        return res.status(404).json({ error: "File not found "});
    }

    fs.rm(path.join(file.location, file.storedName), (error) => {
        console.log(error);
    })

    res.status(200).json("Deleted");
}