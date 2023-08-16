import { FileType } from './FileModel.js'
import SongModel from './SongModel.js'


export const getModelByType = (fileType: FileType) => {
    switch(fileType) {
        case FileType.Song:
            return SongModel;
    }
}