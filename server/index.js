const express = require("express");
const helpers = require("../helpers/github");
const db = require("../database/index");
const bodyParser = require("body-parser");
//require('dotenv').config();
let app = express();

app.use(express.static(__dirname + "/../client/dist"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/repos", function(req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  //console.log('====================req.body.term:', req.body.term)
  helpers.getReposByUsername(req.body.term, (err, results) => {
    if (err) {
      res.status(400);
      console.log(err);
    } else {
      results.forEach(item => {
        var repoDb = new db.Repo(item);
        db.save(repoDb, (err, results) => {
          if (err) {
            console.log(err);
            res.status(400);
            res.end();
          } else {
            res.status(201);
            res.end();
          }
        });
      });
    }
  });
});

app.get("/repos", function(req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  var repos;
  db.find((err, results) => {
    if (err) {
      console.log(err);
      res.status(404);
      res.end();
    } else {
      res.status(200);
      res.send(results);
    }
  });
});

//let port = 1128;
const port = process.env.PORT || 1128;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
