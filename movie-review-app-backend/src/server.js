import express from 'express';
import path from 'path';
import fs from 'fs';
import { MongoClient } from 'mongodb';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
    res.send('Hello');
})



app.get('/movies', async (req, res) => {
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();

    const db = client.db('movie-data');

    const movieData = await db.collection('movies').find({}).toArray();
    console.log( movieData );
    res.json( movieData );
})

app.post('/review', async (req, res) => {

    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();

    const db = client.db('movie-data');
    
    const insertOperation = await db.collection('movies').insertOne( {"title":req.body.title, "release_date":req.body.release_date, "actors": req.body.actors, "image": req.body.image, "rating": parseInt(req.body.rating)} );
    console.log(insertOperation);
    res.redirect('/');

})

app.listen(8000, () => {
    console.log(`Listening on port ${port}`);
});