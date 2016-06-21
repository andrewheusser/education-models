var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);
var port     = process.env.PORT || 8080;

// Server
app.use(express.static(path.join(__dirname, '/app')));

app.use('/node_modules', express.static(path.join(__dirname, '/node_modules')));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/app/index.html'));
});

http.listen(port);
console.log('The magic happens on port ' + port);
