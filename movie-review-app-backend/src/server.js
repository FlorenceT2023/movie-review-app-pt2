import express from 'express';
import path from 'path';
import { MongoClient } from 'mongodb';
import { fileURLToPath } from 'url';
import multer from 'multer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../build')));


app.use(express.static(path.join(__dirname, '../posters')));

const upload = multer({ dest: 'posters/'});

app.get(/^(?!\/api).+/, (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
  });

// Displays movies on webpage
app.get('/api/movies', async (req, res) => {
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();

    const db = client.db('movie-data');

    const movieData = await db.collection('movies').find({}).toArray();
    console.log( movieData );
    res.json( movieData );
})


app.post('/api/removeMovie', async (req,res) => {
    const title = req.body.title;

    console.log(title);

    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();

    const db = client.db('movie-data');
    const result = await db.collection('movies').deleteOne({ title: req.body.title});
    
    res.sendStatus(200);
})

// Handles adding a new movie to DB
app.post('/api/review', upload.single('movie_poster'), async (req, res) => {
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();

    const db = client.db('movie-data');
    
    const insertOperation = await db.collection('movies').insertOne( {'title':req.body.title, "release_date":req.body.release_date, 
    'actors': req.body.actors, 'image': req.file.filename, 'rating': parseInt(req.body.rating)} );
    console.log(insertOperation);
    res.redirect('/');

})

app.listen(8000, () => {
    console.log(`Listening on port ${port}`);
});