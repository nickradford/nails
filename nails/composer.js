composer = {
	compose: compose,
	composePublic: composePublic,
	composeDefault: composeDefault
}

var fs = require("fs");

// function called to render the view
function compose(req) {
    var er = false;
    var obj = {};
    //console.log(__dirname);
  
    try {
      template = fs.readFileSync("./app/views/templates/master.html.js");
			console.log(req);
      var f = fs.readFileSync("./app/views/" + req.path + ".html.js");
      template = template.toString().replace("<% yield %>", f);
			console.log("Render -> " + req.path)
      return template;
    }
    catch (err)
    {
			//if (nails.debugging)
      	return composePublic("404");
			//else
				//return composeDefault(nails.routes.default);
    }
}

// function called to render files from the public dir
function composePublic(filename){
  //check passed in string for file extension, if none, assume .html
  if (filename.indexOf(".html") == -1 && filename.indexOf(".ico") == -1)
    filename += ".html";
  return fs.readFileSync("./public/" + filename);
}

function composeDefault(func) {
	p = func().path;
	filled = fs.readFile("./app/views/templates/master.html.js", function(t) {
		fs.readFile(p, function(y) {
			return t.toString().replace("<% yield %>", y)
		});
	});
}

module.exports = composer