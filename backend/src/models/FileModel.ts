import mongoose, { Schema, model, Types } from 'mongoose';

export enum FileType {
    Song,
}

export interface File {
    originalName: string;
    storedName: string;
    location: string;
    fileType: FileType;
    metadata?: Types.ObjectId;
}

const fileSchema = new Schema<File>({
    originalName: {type: String, required: true},
    storedName: {type: String, required: true},
    location: {type: String, required: true},
    fileType: {type: Number, enum: Object.values(FileType), required: true},
    metadata: {type: mongoose.Schema.Types.ObjectId, required: false}
});

const FileModel = model<File>("File", fileSchema);

export default FileModel;