nails = require("./nails");

console.log(process.argv);
if (process.argv.length == 2)
	port = 9001;
else
	port = parseInt(process.argv[2]);
nails.net.server.start(port);