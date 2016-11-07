

module.exports = function getHTML (options, callback) {
  const https = require('https');

  https.get(options, (response) => {
    var outputList = [];

    // sets the encoding of the received data to utf-8
    response.setEncoding('utf8');

    // pushes each chunk to outputList
    response.on('data', (data) => {outputList.push(data)});

    // invokes the callback function
    response.on('end', (end) => {callback(outputList)});
});

}

