import mongoose, { Schema, DiscriminatorModel} from 'mongoose';
import FileModel, { File } from './FileModel.js';


export interface Song extends File {
    metadata: {
        title: string;
        artist: string;
    }
}

const songSchema = new Schema<Song>({
    metadata: {
        title: {type: String, required: true},
        artist: {type: String, required: true},
    }
})

const SongFileModel = FileModel.discriminator<Song>('SongFile', songSchema);

export default SongFileModel;