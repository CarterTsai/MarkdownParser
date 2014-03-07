var chai = require('chai');
var assert = chai.assert;
var Reader = require('../lib/reader.js');
var R;

describe('Test Reader', function() {

    before(function(done) {
        R = new Reader("This i");
        done();
    });

    it('reader next char test', function() {
        assert.equal( R.nextChar() ,'T'); 
        assert.equal( R.nextChar() ,'h'); 
        assert.equal( R.nextChar() ,'i'); 
        assert.equal( R.nextChar() ,'s'); 
        assert.equal( R.nextChar() ,' '); 
        assert.equal( R.nextChar() ,'i'); 
        assert.equal( R.nextChar() ,-1); 
    }); 
    
    it('reader retract test', function() {
        R.retract();
        assert.equal( R.nextChar() ,'i'); 
        R.retract(2);
        assert.equal( R.nextChar() ,' '); 
        R.retract(5);
        assert.equal( R.nextChar() ,'T'); 
        // over data length
        R.retract();
        assert.equal( R.nextChar() ,'T'); 
    }); 
});
