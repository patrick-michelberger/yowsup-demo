var argv = require('minimist')(process.argv.slice(2));
var exec = require('child_process').exec;

// argvs 
var phone = argv.phone;

if (!phone) {
    console.log("missing --phone parameter value");
    process.exit(9);
}

var command = 'yowsup-cli demos --yowsup --login ' + phone;

var child = exec(requestCodeCommand, function(error, stdout, stderr) {
    if (error !== null) {
        console.log("error: ", error);
    }
    console.log("stderr: ", stderr);
    console.log("stdout: ", stdout);
});
