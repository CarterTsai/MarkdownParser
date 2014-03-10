var Node  = require("./treeNode.js"),
    Token = require("./token.js"),
    Reader = require("./reader.js");

var Scanner = function(str) {
    var that = this;
    that.reader = Reader;
    that.currentLine = 0;
    that.currentToken = new Token();
    this.state = Scanner.START_STATE = 1;
}

Scanner.START_STATE = 1;

Scanner.prototype.makeToken = function (type, text) {
    this.currentToken.type = type;
    this.currentToken.text = text;
    return type;
}

module.exports = Scanner;
