import mongoose, { Schema, model, Types } from 'mongoose';

export interface File {
    _id: Types.ObjectId;
    originalName: string;
    storedName: string;
    location: string;
};

const fileSchema = new Schema<File>({
    originalName: {type: String, required: true},
    storedName: {type: String, required: true},
    location: {type: String, required: true},
});

const FileModel = model<File>("File", fileSchema);

export default FileModel;