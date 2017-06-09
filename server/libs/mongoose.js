var mongoose    = require('mongoose');
var log         = require('./log')(module);
var config      = require('./config');

mongoose.connect(config.get('mongoose:uri'));
var db = mongoose.connection;

db.on('error', function (err) {
    log.error('connection error:', err.message);
});
db.once('open', function callback () {
    log.info("Connected to DB!");
});

var Schema = mongoose.Schema;

// Schemas

var Images = new Schema({
    kind: {
        type: String,
        enum: ['thumbnail', 'detail'],
        required: true
    },
    url: { type: String, required: true }
});

var Article = new Schema({
    img: {type: String, required: true},
    title: { type: String, required: true },
    text: { type: String, required: true}
});

var newArticle = new Schema({
    img: {type: String, required: true},
    title: { type: String, required: true },
    text: { type: String, required: true}
});
// validation
// Article.path('name').validate(function (v) {
//     return v.length > 5 && v.length < 70;
// });

var ArticleModel = mongoose.model('newArticle', newArticle);

module.exports.ArticleModel = ArticleModel;