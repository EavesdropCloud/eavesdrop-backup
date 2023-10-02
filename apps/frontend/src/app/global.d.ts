
declare global {
    interface Metadata {
      id: number
      title: string
      artist: string
      bpm?: number
      length?: number
      genre?: string
    }
  }

export {}