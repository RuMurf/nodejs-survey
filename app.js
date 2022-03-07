var express = require('express');
var mongoose = require('mongoose');
var config = require('./config.json');

//import express
var app = express();
//connect to mongodb
mongoose.connect('mongodb+srv://'+config.mongo_username+':'+config.mongo_password+'@cluster0.kczw4.mongodb.net/survey?retryWrites=true&w=majority');

app.set('view engine', 'ejs');
app.use(express.static('./public'));

//schema used to represent documents from database
var languageSchema = new mongoose.Schema({
    language: String,
    votes: Number
});

var Language = mongoose.model('Language', languageSchema);

app.get('/survey', function(req,res){
    //get data from mongodb and pass it to the survey view
    Language.find({}, function(err, data){
        if (err) throw err;
        res.render('survey', {languages: data});
    });
});

app.put('/submit/:item', function(req,res){
    //submit vote to database
    Language.updateOne({language: req.params.item}, { $inc: { votes: 1 }}, function(err,data){
        if (err) throw err;
        res.json(data);
    });
});

app.get('/results', function(req,res){
    //get data from mongodb and pass it to the results view
    Language.find({}, function(err, data){
        if (err) throw err;
        res.render('results', {languages: data});
    });
});

//this is a basic hello world page I used to test that my express setup was working
app.get('/', function (req, res) {
    res.send('Hello World!');
});

//listen on port 3000
app.listen(3000, function () {
    console.log('Survey app listening on port 3000!');
});