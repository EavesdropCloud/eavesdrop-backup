db = db.getSiblingDB('test');

db.createCollection('songs');
db.songs.insertMany([
  {
    title: 'Song 1',
    artist: 'Artist 1',
  },
  {
    title: 'Song 2',
    artist: 'Artist 2',
  },
]);
