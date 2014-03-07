var Node  = require("./treeNode.js"),
    Token = require("./token.js"),
    Reader = require("./reader.js");

var scanner = function(str) {
    var that = this;
    that.reader = Reader;
    that.currentLine = 0;
}

module.exports = scanner;
