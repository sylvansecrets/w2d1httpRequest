var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase(output){
  console.log(output.join("").toUpperCase());
}

getHTML(requestOptions, printUpperCase);