var fs = require("fs");
function compose(req) {
    var er = false;
    var obj = {};
	console.log(__dirname);
	try {
        var f = fs.readFileSync("./app/views/" + req.controller + "/" + req.action + ".html.js");
		return f;
	}
	catch (err)
	{
	    console.log(err);
    }
} 

function composePublic(filename){
    var f = fs.readFileSync("./public/" + filename + ".html");
    return f;
}

exports.compose = compose;
exports.composePublic = composePublic;