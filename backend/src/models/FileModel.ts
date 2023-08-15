import { Schema, model, connect } from 'mongoose';

interface File {
    originalName: string;
    storedName: string;
}

const fileSchema = new Schema<File>({
    originalName: {type: String, required: true},
    storedName: {type: String, required: true}
})

const FileModel = model<File>("File", fileSchema);

module.exports = FileModel;