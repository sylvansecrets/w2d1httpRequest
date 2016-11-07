

function getAndPrintHTMLChunks () {

  var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */



  https.get(requestOptions, function (response){

    // sets the encoding of the received data to utf-8
    response.setEncoding('utf8');

    // console.log the data when it is received
    response.on('data', function (data){
      console.log(data.length + "\n");
    });

    response.on('end', function(){
      console.log('Response stream complete.')
    });

    response.on('err', function(err){
      console.log('Error ', err, 'encountered')
    });


  });

}

getAndPrintHTMLChunks();