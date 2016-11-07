var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase(output){
  console.log(output.join("").toLowerCase());
}

getHTML(requestOptions, printLowerCase);