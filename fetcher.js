// Import request and fs modules
const request = require('request');
const fs = require('fs');

// Accepts two command line arguments as an array
const userInput = process.argv.slice(2);
const url = userInput[0];
const fileLocation = userInput[1];

/**
 * A script makes an HTTPS request to a domain
 * @param url input
 * @param callback function
 * @returns A file with the body content in the specified location
 */
request(url, (error, response, body) => {
  if (error) {
    console.log("Request failed", error);
    return;
  }
  console.log("statusCode:", response && response.statusCode);

  // After request is made body data is used to write a file
  fs.writeFile(fileLocation, body, err => {
    if (err) {
      console.log("There was an error writing the file", err);
      return;
    }
    console.log(`Downloaded and saved ${body.length} to ${fileLocation}`);
  });
});