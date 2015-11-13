var argv = require('minimist')(process.argv.slice(2));
var exec = require('child_process').exec;

// argvs 
var phone = argv.phone;
var code = argv.code;

if (!phone) {
    console.log("missing --phone parameter value");
    process.exit(9);
}

if (!code) {
    console.log("missing --code parameter value");
    process.exit(9);
}

var registerCommand = 'yowsup-cli registration --register ' + code + ' --phone ' + phone + ' --cc 49';

var child = exec(registerCommand, function(error, stdout, stderr) {
    if (error !== null ) {
        console.log("error: ", error);
    }	
    console.log("stdout: ", stdout);
    console.log("stderr: ", stderr);
});