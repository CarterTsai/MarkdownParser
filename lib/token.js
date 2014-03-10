var Token = function(type, text) {
    this.type = type;
    this.text = text;
}

Token.tokens = {};

Token.tokens.END  = 1;
Token.tokens.HASH = 2;                  // #
Token.tokens.PLUS = 3;                  // +
Token.tokens.PIPE = 4;                  // |
Token.tokens.HYPHEN = 5;                // -
Token.tokens.DOLLAR = 6;                // $
Token.tokens.EQUALS  = 7;               // =
Token.tokens.SLASH = 8;                 // /
Token.tokens.ASTERISK = 9;              // *
Token.tokens.HYPHEN = 10;               // -
Token.tokens.BACKSLASH = 11;            // \
Token.tokens.UNDERSCORE = 12;           // _
Token.tokens.AMPERSAND =  13;           // &
Token.tokens.LEFT_BRACKET = 14;         // (
Token.tokens.RIGHT_BRACKET = 15;        // (
Token.tokens.RIGHT_ANGLED = 16;         // >
Token.tokens.LEFT_ANGLED = 17;          // <
Token.tokens.LEFT_SQUARE_BRACKET = 18;  // [
Token.tokens.RIGHT_SQUARE_BRACKET = 19; // ]
Token.tokens.LEFT_PARENTHESIS = 20;     // {
Token.tokens.RIGHT_PARENTHESIS = 21;    // }

Token.tokens.HEADER1  = 22;             // h1
Token.tokens.HEADER2  = 23;             // h2
Token.tokens.HEADER3  = 24;             // h3
Token.tokens.HEADER4  = 25;             // h4
Token.tokens.HEADER5  = 26;             // h5
Token.tokens.HEADER5  = 27;             // h6

Token.backwardMap = {};

for (var x in Token.tokens) {
    Token.backwardMap[Token.tokens[x]] = x;
}

module.exports = Token;
