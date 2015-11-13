var argv = require('minimist')(process.argv.slice(2));
var exec = require('child_process').exec;

// argvs 
var phone = argv.phone;
var message = argv.message;

if (!phone) {
    console.log("missing --phone parameter value");
    process.exit(9);
}

if (!message) {
    console.log("missing --message parameter value");
    process.exit(9);
}

var command = 'yowsup-cli demos -s ' + phone + ' "' + message + '" --config "../config"';

var child = exec(command, function(error, stdout, stderr) {
    if (error !== null) {
        console.log("error: ", error);
    }
    console.log("stderr: ", stderr);
    console.log("stdout: ", stdout);
});