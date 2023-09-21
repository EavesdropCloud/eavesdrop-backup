export interface FileProps {
    _id: String,
    originalName: string
}

export interface SongProps extends FileProps {
    metadata: {
      title: string,
      artist: string
    }
}

export interface IconProps {
  className: string
}