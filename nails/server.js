http = require("http");
url = require("url");

function start() {
  function onRequest(request, response) {
    
    //console.log("Request for " + pathname + " received.");
    var u = scanner.scan(request);
    var r = router.route(u);
    var c = composer.compose(r);
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(c);
    response.end();
    //console.log(module);
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
