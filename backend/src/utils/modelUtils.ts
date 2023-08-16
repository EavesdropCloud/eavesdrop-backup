import { FileType } from '../models/FileModel.js'
import SongModel from '../models/SongModel.js'

export const getModelByType = (fileType: FileType) => {
    switch(fileType) {
        case FileType.Song:
            return SongModel;
    }
}