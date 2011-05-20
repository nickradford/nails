var fs = require("fs");

// function called to render the view
function compose(req) {
    var er = false;
    var obj = {};
    console.log(__dirname);
  
    try {
      template = fs.readFileSync("./app/views/templates/master.html.js");
      var f = fs.readFileSync("./app/views/" + req.path + ".html.js");
      template = template.toString().replace("<% yield %>", f);
      return template;
    }
    catch (err)
    {
      return composePublic("404");
    }
}

// function called to render files from the public dir
function composePublic(filename){
  //check passed in string for file extension, if none, assume .html
  if (filename.indexOf(".html") == -1 && filename.indexOf(".ico") == -1)
    filename += ".html";
  return fs.readFileSync("./public/" + filename);
}

exports.compose = compose;
exports.composePublic = composePublic;