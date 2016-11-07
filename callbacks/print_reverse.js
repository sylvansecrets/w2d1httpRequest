var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse(output){
  console.log(output.join("").split("").reverse().join(""));
}

getHTML(requestOptions, printReverse);