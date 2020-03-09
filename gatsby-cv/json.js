let siteConfig = require('./data/siteConfig');
const fs = require('fs');

// stringify JSON Object
var jsonContent = JSON.stringify(siteConfig);

// save JSON file to disk
fs.writeFile("site-data.json", jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
    console.log("JSON file has been saved.");
});