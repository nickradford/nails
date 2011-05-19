function route(u) {
	//console.log("Trying to route a request for " + u.pathname);
	var pathname = u.pathname;
	if(pathname.indexOf(".ico") == -1)
	{
	    var obj = pathname.substr(1).split("/"); // get rid of leading / and split the rest of   
	                                            //  the request.
	    console.log("Controller is: " + obj[0]);
	    var ret = {controller: obj[0]};
	    if (obj.length == 1) {
	        console.log("Action is: index");
	        ret.action = "index";
        }
	    else {
	        console.log("Action is: " + obj[1]);
	        ret.action = obj[1];
        }
	    return ret;
	    
	    
	    
	}
	else
	    return "Finding asset.";
}

exports.route = route;