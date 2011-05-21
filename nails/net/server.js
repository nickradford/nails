server = {
  http  : require("http"),
  url   : require("url"),
  util  : require("util"),
  start : start
}

function start(port) {
  function onRequest(request, response) {
		if (nails.debugging)
			debugger;
    console.log("[" + request.remoteAddress + "] requesting -> " + request.headers + );
    //console.log("Request for " + pathname + " received.");
    var u = nails.net.scanner.scan(request);
    var r = nails.net.router.route(u);
    var c = nails.composer.compose(r);
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(c);
    response.end();
    //console.log(module);
  }
	p = parseInt(port);
  nails.net.server.http.createServer(onRequest).listen(p);
  console.log("Server has started on port " + p);
  //console.log(nails.net.server.util.inspect(nails));
}

module.exports = server;
