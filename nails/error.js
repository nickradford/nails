error = {
	UnresolvedPath : UnresolvedPath,
	FileNotFound 	 : FileNotFound,
	ServerError		 : ServerError
}

function UnresolvedPath(req) {
	
}

function FileNotFound(req) {
    console.error("File not found: " + req.request.headers.host + req.return_obj.path);
    nails.composer.composePublic("404");
}

function ServerError(err){
	console.log(err);
}
module.exports = error