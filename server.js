var express = require('express');

// Create our app

var app = express();

app.use(express.static('public'));

app.listen(3333, function(){
    console.log('express server is up on port 3333');

})
