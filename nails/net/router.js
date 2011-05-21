router = {
  route       : route,
  check_route : check_route
}


function route(u) {
  //console.log("Trying to route a request for " + u.pathname);
  var pathname = u.url.pathname;
  if(pathname.indexOf(".ico") == -1)
  {
    var obj = pathname.substr(1).split("/"); // get rid of leading / and split the rest of
                                             //  the request.
    if (obj[obj.length - 1] == "")
      obj.pop();
    //console.log("Controller is: " + obj[0]);
    var ret = {controller: obj[0], path: obj};
		u.return_obj = ret;
    if (obj.length == 1) {
      //console.log("Action is: index");
      ret.action = "index";
    }
    else {
      //console.log("Action is: " + obj[1]);
      ret.action = obj[1];
    }
    if(func = nails.net.router.check_route(ret))
    {
      return func();
    }
    else
    	return nails.error.FileNotFound(u);



	}
	else
	    return "Finding asset.";
}

function check_route(rto) {
  // Check for named route, then controller.
  //console.log("Check Route: " + nails.util.inspect(rto));
  namedrt = rto.path[0];
  //console.log("Possible named route: " + namedrt);
  //console.log("All named routes: " + nails.util.inspect(nails.routes));
  if (rto.path.length == 1) {
    if (nails.routes[namedrt]){
      //console.log("found named route");
      return nails.routes[namedrt];
      
    }
    else
      return false
  }
}

module.exports = router