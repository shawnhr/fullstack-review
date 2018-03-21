const mongoose = require("mongoose");
const Promise = require("bluebird");
mongoose.connect("mongodb://localhost/fetcher");

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: { type: String, unique: true },
  // id: Number,
  name: String,
  full_name: String,
  owner: Object,
  description: String,
  html_url: String,
  stargazers_count: Number,
  url: String,
  watchers_count: Number,
  forks_count: Number
});

let Repo = mongoose.model("Repo", repoSchema);

let save = (/* TODO */ repo, cb) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  repo.save((err, repo) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, repo);
    }
  });
};

let find = cb => {
  Repo.find()
    .limit(25)
    .sort({ forks_count: -1 })
    .exec((err, repos) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, repos);
      }
    });
};

module.exports.Repo = Repo;
module.exports.save = save;
module.exports.find = find;
