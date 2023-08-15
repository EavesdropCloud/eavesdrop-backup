import { Schema, model, Types } from 'mongoose';

export interface Song {
    title: string;
    artist: string;
    //fileId: Types.ObjectId;
}

const songSchema = new Schema<Song>({
    title: {type: String, required: true},
    artist: {type: String, required: true},
    //fileId: {type: mongoose.Schema.Types.ObjectId, ref: 'File', required: true}
})

const SongModel = model<Song>('Song', songSchema);

export default SongModel;