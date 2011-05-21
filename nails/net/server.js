server = {
  http  : require("http"),
  url   : require("url"),
  util  : require("util"),
  start : start
}

function start(port) {
  function onRequest(request, response) {
		try {
			exports.request = request;
    	console.log("[" + request.connection.remoteAddress + "] "+ request.method + " -> " + request.headers.host + request.url );
    	//console.log("Request for " + pathname + " received.");
    	var u = nails.net.scanner.scan(request);
			console.log(u);
    	var r = nails.net.router.route(u);
			console.log(r);
    	var c = nails.composer.compose(r);
    	response.writeHead(200, {"Content-Type": "text/html"});
    	response.write(c);
    	response.end();
		}
		catch (err)
		{
		  nails.error.ServerError("Server error: " + err);
		}
    //console.log(module);
  }
	p = parseInt(port);
  nails.net.server.http.createServer(onRequest).listen(p);
  console.log("Server has started on port " + p);
  //console.log(nails.net.server.util.inspect(nails));
}

module.exports = server;
