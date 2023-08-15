import { Request, Response } from 'express';
import SongModel, { Song } from '../models/SongModel';

export const getAllSongs = async (req: Request, res: Response) => {
    try {
        const songList: Song[] = await SongModel.find();
        res.status(200).json(songList);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occured'})
    }
};