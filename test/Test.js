var chai = require('chai');
var assert = chai.assert;
var Parser = require('../lib/makedownParser.js');


describe('Test mocha', function() {

    before(function(done) {
        // Create something before testing
        // then using done() to finish
        done();
    });

    it('= Hn should equal <hn>hn</hn>',function() {
        assert.equal( Parser('= H1')     , '<h1>H1</h1>'); 
        assert.equal( Parser('== H2')    , '<h2>H2</h2>'); 
        assert.equal( Parser('=== H3')   , '<h3>H3</h3>'); 
        assert.equal( Parser('==== H4')  , '<h4>H4</h4>'); 
        assert.equal( Parser('===== H5' ), '<h5>H5</h5>'); 
        assert.equal( Parser('====== H6'), '<h6>H6</h6>'); 
    });
    
});
