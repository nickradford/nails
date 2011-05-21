var url = require("url");
function scan(request)
{
    var u = url.parse(request.url, true);
    // check router for a named route
    console.log("Scanned URL is " + u.pathname)
    //console.log(u);
    return u;
    // construct the request_args
}

exports.scan = scan;