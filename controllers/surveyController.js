var bodyParser = require('body-parser');

var mongoose = require('mongoose');

//mongoose.set('useNewUrlParser', true);
//mongoose.set('useUnifiedTopology', true);

mongoose.connect('***REMOVED***');


var languageSchema = new mongoose.Schema({
    language: String,
    votes: Number
});

var Language = mongoose.model('Language', languageSchema);

var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
    app.get('/survey', function(req,res){
        // get data from mongodb and pass it to the view
        Language.find({}, function(err, data){
          if (err) throw err;
          res.render('survey', {languages: data});
        });
    });
};