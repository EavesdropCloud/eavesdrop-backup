export interface FileModel {
    _id: String,
    originalName: string
}

export interface SongModel extends FileModel {
    metadata: {
      title: string,
      artist: string
    }
}