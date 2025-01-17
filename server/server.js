const express = require('express');
const app = express();
const port = 4000;
const path = require('path'); //this gets the current directory 
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const mongodb = "mongodb+srv://fred:fred@cluster0-9zu60.mongodb.net/test?retryWrites=true&w=majority"; //lab8
mongoose.connect(mongodb, {useNewUrlParser:true});

/*  This code block was taken from lab sheet
    adds cors headers 
*/
const cors = require('cors'); app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title:String,
    year:String,
    poster:String
});

const MovieModel = mongoose.model("movie", movieSchema);

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/test', (req, res) => {
    res.send('test!');
})

app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send('Hello ' + req.params.name);
})

app.get('/api/movies', (req, res) => {
    // const myMovies = [{ "Title": "Avengers: Infinity War", "Year": "2018", "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg" }, { "Title": "Captain America: Civil War", "Year": "2016", "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg" }]
    // res.status(200).json({ movies: myMovies }); // HARDCODED MOVIE DATA

    MovieModel.find((error, data) => {
        res.json({movies:data});
    })
})

app.post('/api/movies', (req, res) => {
    console.log("Movies recieved");
    console.log(req.body);
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.poster);


    MovieModel.create({ //lab 8
        title: req.body.title,
        year: req.body.year,
        poster: req.body.poster
    });
    res.json("Data Uploaded");
})

app.put('/api/movies/:id', (req, res) => {
    console.log("Edit: " + req.params.id);

    MovieModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, data) => {
        res.json(data);
    })
})

app.delete('/api/movies/:id', (req, res) => {
    console.log(req.params.id);

    MovieModel.deleteOne({_id: req.params.id}, (error, data) => {
        if(error) {
            res.json(error);
        }
        res.json(data);
    })
    
})

app.get("/api/movies/:id", (req, res) => { 
    console.log(req.params.id);

    MovieModel.findById(req.params.id, (error, data) => { //todo: log errors to console
        res.json(data);
    })
})

app.get('/test_html', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html')); // append file.html onto absolute value for directory 
})

app.get('/name', (req, res) => {
    console.log(req.query.fname, req.query.lname);
    res.send("Hello " + req.query.fname + " " + req.query.lname);
})

app.post('/name', (req, res) => {
    res.send("First Name: " + req.body.fname + ", Last Name: " + req.body.lname);

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));