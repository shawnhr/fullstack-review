const request = require('request');
const config = require('../config.js');

let getReposByUsername = (/* TODO */username) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  
  //"repos_url": "https://api.github.com/users/octocat/repos",
  //url: The destination URL of the HTTP request
  //method: The HTTP method to be used (GET, POST, DELETE, etc)
  //headers: An object of HTTP headers (key-value) to be set in the request
  //form: An object containing key-value form data
  
  let options = {
    url: `https://api.github.com/users/{username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  
  request(options, (err, res, body) {
    let json = JSON.parse(body);
    console.log(json);
    return json;
  })

}

getElementsByTagName('shawnhr');
module.exports.getReposByUsername = getReposByUsername;