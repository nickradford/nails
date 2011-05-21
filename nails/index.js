nails = require("./nails");

//console.log(process.argv);
if (process.argv.length == 2)
	port = 9001;
else
	port = parseInt(process.argv[2]);
if (process.argv.indexOf("-d"))
	nails.debugging = true;
else
	nails.debugging = false;
nails.net.server.start(port);