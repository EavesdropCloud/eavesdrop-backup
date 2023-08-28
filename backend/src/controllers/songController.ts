import { Request, Response } from 'express';
import { File } from '../models/files/FileModel.js';
import SongModel, { Song } from '../models/files/SongFileModel.js';

export const getAllSongs = async (req: Request, res: Response) => {
    try {
        const songs: Song[] = await SongModel.find();
        res.status(200).json(songs);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occured' });
    }
};