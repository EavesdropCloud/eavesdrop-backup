import { Request, Response } from 'express';
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

export const updateSongById = async (req: Request, res: Response) => {
    try {
        const songId = req.params.id;
        const song: Song | null = await SongModel.findOneAndUpdate({_id: songId}, req.body, {new: true});
        if (song === null) {
            return res.status(404).json({error: "Song not found."});
        }
        res.status(200).json(song);
        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occured' });
    }
}