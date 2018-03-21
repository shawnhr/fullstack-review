const request = require("request");
//const config = require('../config.js');
//require('dotenv').config();

let getReposByUsername = (/* TODO */ username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL

  //"repos_url": "https://api.github.com/users/octocat/repos",
  //url: The destination URL of the HTTP request
  //method: The HTTP method to be used (GET, POST, DELETE, etc)
  //headers: An object of HTTP headers (key-value) to be set in the request
  //form: An object containing key-value form data
  //console.log('helper .. username:', username)
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      "User-Agent": "request",
      // 'Authorization': `token ${config.TOKEN}`
      Authorization: `token ${process.env.TOKEN}`
    }
  };

  request(options, (err, response, body) => {
    if (!err & (response.statusCode === 200)) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, JSON.parse(body));
      }
    }
  });
};

module.exports.getReposByUsername = getReposByUsername;
