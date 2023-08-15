import React from 'react'


interface MetadataViewerProps {
  song: Song[];
}

const MetadataViewer: React.FC<MetadataViewerProps> = ({ song }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Metadata Viewer</h1>
      <ul>
        {song.map(item => (
          <li key={item.id} className="mb-6">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-600">{item.artist}</p>
            <p className="text-gray-600">{item.genre}</p>
            <p className="text-gray-600">{item.length}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MetadataViewer;
