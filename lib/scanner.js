var node = require("./treeNode.js"),
    token = require("./token.js");

var scanner = function() {
    this.reader = reader;
    this.currentLine = 0;
}

module.exports = scanner;
