import { FileType } from '../models/FileModel.js'
import SongModel from '../models/SongModel.js'

export const getModelByFileType = (fileType: FileType) => {
    switch(fileType) {
        case FileType.Song:
            return SongModel;
    }
}