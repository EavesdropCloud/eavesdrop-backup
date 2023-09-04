db = db.getSiblingDB('test');

db.createCollection('files');
db.files.insertMany([
  {"metadata":{"title":"3 am West End","artist":"statusq"},"originalName":"3 am West End.mp3","storedName":"c531f9d6ecb6622fdce421a2653793cd","location":"/uploads","__t":"SongFile","__v":0},{"metadata":{"title":"Chronos","artist":"Alexander Nakarada"},"originalName":"Chronos.mp3","storedName":"384d0dc393687b61eeea644c56339097","location":"/uploads","__t":"SongFile","__v":0},{"metadata":{"title":"Space Ambience","artist":"Alexander Nakarada"},"originalName":"Space Ambience.mp3","storedName":"9aef87047373672fdfaddecc4bd5da0c","location":"/uploads","__t":"SongFile","__v":0}
]);
