var exec = require('child_process').exec;
var express = require("express");
var bodyParser = require('body-parser');
var app = express();

var port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function(req, res) {
    app.render('index', function(err, html){
        if (err) {
            res.send(500)
        } else {
            res.send(html);
        }
    });
});

app.post('/api/message', function(req, res) {
    var command = 'yowsup-cli demos -s ' + req.body.phone + ' "' + req.body.message + '" --config config';
    var child = exec(command,
        function(error, stdout, stderr) {
            if (error !== null) {
                console.log('exec error: ' + error);
                res.send(500);
            } else {
                res.send(200);
            }
        });
});

app.listen(port, function() {
    console.log("listening on port: " + port);
});