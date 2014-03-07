var Token = {};

Token.END  = 1;
Token.HASH = 2;                 // #
Token.PLUS = 3;                 // +
Token.PIPE = 3;                 // |
Token.HYPHEN = 5;               // -
Token.DOLLAR = 7;               // $
Token.EQUALS  = 5;              // =
Token.SLASH = 5;                // /
Token.ASTERISK  = 3;            // *
Token.HYPHEN = 5;               // -
Token.BACKSLASH = 5;            // \
Token.UNDERSCORE = 6;           // _
Token.AMPERSAND =  1;           // &
Token.LEFT_BRACKET = 1;         // (
Token.RIGHT_BRACKET = 1;        // (
Token.RIGHT_ANGLED = 9          // >
Token.LEFT_ANGLED = 9           // <
Token.LEFT_SQUARE_BRACKET = 9   // [
Token.RIGHT_SQUARE_BRACKET = 9  // ]
Token.LEFT_PARENTHESIS = 9      // {
Token.RIGHT_PARENTHESIS = 9     // }


module.exports = Token;
