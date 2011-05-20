server = {
  http  : require("http"),
  url   : require("url"),
  util  : require("util"),
  start : start
}

function start() {
  function onRequest(request, response) {
    
    //console.log("Request for " + pathname + " received.");
    var u = nails.scanner.scan(request);
    var r = nails.router.route(u);
    var c = nails.composer.compose(r);
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(c);
    response.end();
    //console.log(module);
  }

  nails.server.http.createServer(onRequest).listen(9001);
  console.log("Server has started.");
  console.log(nails.server.util.inspect(nails));
}

module.exports = server;
