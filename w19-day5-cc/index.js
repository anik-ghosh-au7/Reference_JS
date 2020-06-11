import { MongoClient } from 'mongodb';
import books from './data.json';

MongoClient.connect('mongodb://localhost', { useUnifiedTopology: true }, function (err, client) {
  if (err) throw err;

  let db = client.db('BookList');

  let collection = db.collection('books');

  collection.insertMany(books).then(console.log('Documents inserted successfully!!!')).catch(err => console.log(err));
}); 

