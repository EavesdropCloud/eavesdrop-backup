import { Request, Response } from 'express';
import SongModel, { Song } from '../models/SongModel.js';

export const getAllSongs = async (req: Request, res: Response) => {
    try {
        const songList: Song[] = await SongModel.find();
        res.status(200).json(songList);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occured' });
    }
};

export const getSongById = async (req: Request, res: Response) => {
    try {
        const songId = req.params.id;
        const song: Song | null = await SongModel.findById(songId);
        if (!song) {
            return res.status(404).json({ error: "Song not found" });
        }
        res.status(200).json(song);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occured' });
    }
};

export const deleteSongById = async (req: Request, res: Response) => {
    try {
        const songId = req.params.id;
        await SongModel.deleteOne({ _id: songId });
        res.status(200).json("Deleted");
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occured' });
    }
};
