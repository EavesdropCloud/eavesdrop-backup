import { Request, Response } from 'express';
import { parseFile } from 'music-metadata';
import path from 'path';
import fs from 'fs';
import { Types } from 'mongoose';

import FileModel, { File, FileType } from '../models/FileModel.js';
import SongModel, { Song } from '../models/SongModel.js';
import { getModelByFileType } from '../utils/modelUtils.js';


export const uploadFile = async (req: Request, res: Response) => {
    const filePath = path.join(req.file.destination, req.file.filename);
    const metadata = await parseFile(filePath);

    var songId: Types.ObjectId;
    const song: Song = await SongModel.create({
        title: metadata.common.title || "Unknown Artist",
        artist: metadata.common.artist || "Unkown Title"
    }).then((createdSong) => {
        songId = createdSong._id;
        return createdSong;
    });

    const file: File = await FileModel.create({
        originalName: req.file.originalname,
        storedName: req.file.filename,
        location: req.file.destination,
        fileType: FileType.Song,
        metadata: songId
    });

    res.status(201).json({ file, song });
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

    if (file.metadata) {
        await getModelByFileType(file.fileType).findByIdAndDelete(file.metadata);
    }

    fs.rm(path.join(file.location, file.storedName), (error) => {
        console.log(error);
    })

    res.status(200).json("Deleted");
}