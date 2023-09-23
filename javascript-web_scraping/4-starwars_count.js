#!/usr/bin/node
const url = process.argv[2];
const request = require('request');
let counter = 0;
request(url, function (error, response, body) {
  if (error) {
    console.error(error);
  }
  const filmJson = JSON.parse(body);
  const filmObj = filmJson.results;
  //  iterate over the 7 films
  for (const attributename of filmObj) {
   
    for (const character of attributename.characters) {
    
      if (character.indexOf('18') > -1) {
      
        counter = counter + 1;
      }
    }
  }
  console.log(counter);
});