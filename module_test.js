var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML(output){
  console.log(output.join(""));
}

getHTML(requestOptions, printHTML);