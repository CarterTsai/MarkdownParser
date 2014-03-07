var chai = require('chai');
var assert = chai.assert;
var Scanner = require('../lib/scanner.js');
var Token = require('../lib/token.js');
var s;
describe('Test Scanner', function() {

    before(function(done) {
        // Create something before testing
        // then using done() to finish
        s = new Scanner("");
        done();
    });

    it('scan header token', function() {
/*        s = new Scanner("");
        assert.equal( s('#')      , Token.HEADER1 ); 
        assert.equal( Scanner('##')     , Token.HEADER2 ); 
        assert.equal( Scanner('###')    , Token.HEADER3 ); 
        assert.equal( Scanner('####')   , Token.HEADER4 ); 
        assert.equal( Scanner('#####' ) , Token.HEADER5 ); 
        assert.equal( Scanner('######') , Token.HEADER6 ); */
    }); 
});
