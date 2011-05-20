function FileNotFound(req) {
    console.error("File not found: " + req.path);
    nails.composer.composePublic("404");
}
exports.FileNotFound = FileNotFound;