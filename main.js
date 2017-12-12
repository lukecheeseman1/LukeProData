var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use('/scripts', express.static(__dirname + '/node_modules/bootstrap/dist/'));

app.get('/', function(req, res) {
    console.log("file io");
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/index', function(req, res) {
    console.log("file io");
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/techno', function(req, res) {
    console.log(" Techno page ");
    res.sendFile(path.join(__dirname + '/techno.html'));
});

app.get('/house', function(req, res) {
    console.log("House page ");
    res.sendFile(path.join(__dirname + '/house.html'));
});

app.get('/events', function(req, res) {
    console.log(" Events page ");
    res.sendFile(path.join(__dirname + '/events.html'));


})

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(8080);

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port

    console.log(" app listening at http://%s:%s", host, port)
})