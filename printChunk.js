

function getAndPrintHTMLChunks () {

  var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */



  https.get(requestOptions, function (response){
    // sets a mutable list as the output
    outputList = [];

    // sets the encoding of the received data to utf-8
    response.setEncoding('utf8');

    // console.log the data when it is received
    response.on('data', function (response){
      outputList.push(data.toString());
    });

    response.on('end', function(){
      console.log(outputList.join(""));
    });

    response.on('err', function(response){
      console.log('Error ', err, 'encountered')
    });


  });

}

getAndPrintHTMLChunks();