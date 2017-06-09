const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var config = require('./server/libs/config');
var log = require('./server/libs/log')(module);
const ArticleModel = require('./server/libs/mongoose').ArticleModel;


const api = require('./server/routes/api');

const app = express();
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));