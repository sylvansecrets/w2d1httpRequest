var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};


// replaces sane text with 1337sp34k
function print1337(output){
  var leetDict = {a : '4', e : '3', l : '1', o : '0', s : '5', t : '7', 'ck' : 'x', 'er' : '0r', 'you' : 'j00'};
  outStr = output.join("");
  for (key in leetDict){
    if (leetDict.hasOwnProperty(key)){
      original = new RegExp(key, "ig");
      // e is exceptional, as it needs to match e + not "r"
      if (key === "e"){
        original = /e(?!r)/ig;
      }
      outStr = outStr.replace(original, leetDict[key]);
    }
  }

  console.log(outStr);
}

getHTML(requestOptions, print1337);
