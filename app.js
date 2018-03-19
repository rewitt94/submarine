var express = require('express');
var app = express();

app.use(express.static(__dirname + '/view'));
app.use(express.static(__dirname + '/script'));

app.get('/', function(req,res){
  res.sendFile(__dirname + '/view/submarine.html');
});

app.listen('4000');
console.log('Running on port 4000');

// leaderboard api

var sqlite = require('sqlite3').verbose();
var db = new sqlite.Database('leaderboard');

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/submarine_load', function(req,res){
  db.all(`
  SELECT * FROM leaderboard
  `, function(err, leaderboard) {
    if (err != null) {
    res.status(500).send('Something broke!');
    }
    res.send(JSON.stringify(leaderboard));
  });
});

app.post('/submarine_add', function(req,res){
  var name = req.body.name;
  var score = req.body.score;
  db.run(`INSERT INTO leaderboard
  VALUES ('${name}', ${score})`);
});
