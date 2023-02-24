import express from 'express';
import fs from 'fs';
import {MongoClient} from 'mongodb';
const app = express();
const port = 8000;


app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Hello');
})

// const movieData = JSON.parse(fs.readFileSync('./movies.json'));
// console.log(movieData);

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
    // is there a way to generate movie id from here?
    
    const insertOperation = await db.collection('movies').insertOne( {"title":req.body.title, "release_date":req.body.release_date, "actors": req.body.actors, "image": req.body.image, "rating": parseInt(req.body.rating)} );
    console.log(insertOperation);
    res.redirect('/');

    // movieData.push( {"id": movieData.length+1, "title":req.body.title, "release_date":req.body.release_date, "actors": req.body.actors, "image": req.body.image, "rating": req.body.rating} )
    // saveData();
    // console.log('update movies called')
    // console.log(req.body);
    // res.redirect('/');
})

const saveData = () => {
    const jsonContent = JSON.stringify(movieData);
    fs.writeFile("./movies.json", jsonContent, 'utf8', function (err) {
        if (err) {
            console.log("An error occurred while writing JSON Object to file.");
        }
        console.log("JSON file has been saved.");
    });
}

app.listen(8000, () => {
    console.log(`Listening on port ${port}`);
});