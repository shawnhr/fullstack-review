const mongoose = require("mongoose");
const Promise = require("bluebird");
mongoose.connect("mongodb://localhost/fetcher");

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

let Repo = mongoose.model("Repo", repoSchema);

  


let save = (/* TODO */ repo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  let data = new Repo({
    id: repo.id,
    name: repo.name,
    owner_id: repo.owner.id,
    avatar_url: repo.avatar_url,
    html_url: repo.html_url,
    watchers_count: repo.watchers_count,
    forks_count: repo.forks_count
  })
  record.save()
  
}

module.exports.save = save;
