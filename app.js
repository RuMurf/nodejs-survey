var express = require('express');
var surveyController = require('./controllers/surveyController');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));

surveyController(app);

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});