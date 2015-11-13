var argv = require('minimist')(process.argv.slice(2));
var exec = require('child_process').exec;

// argvs 
var phone = argv.phone;

if (!phone) {
    console.log("missing --phone parameter value");
    process.exit(9);
}

var requestCodeCommand = 'yowsup-cli registration --requestcode sms --phone ' + phone + ' --cc 49 --mcc 123 --mnc 456';

var child = exec(requestCodeCommand, function(error, stdout, stderr) {
    var regex = /{.*}/;
    var result = regex.exec(stderr);
    result = JSON.parse(result[0]);

    if (error !== null ) {
        console.log("error: ", error);
    }

    if (result && result.status === 'fail') {
    	console.log("fail: ", stderr);
    	console.log("stdout: ", stdout);
    }
});

