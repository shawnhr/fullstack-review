const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: { type: String, unique: true, dropDups: true },
  name: String,
  owner_id: String,
  avatar_url: String,
  html_url: String,
  watchers_count: Number,
  forks_count: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */repo, callback) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  repo.save((err, repo) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, repo)
    }
  })
  
}

module.exports.save = save;