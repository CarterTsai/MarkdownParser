var Reader = function(str) {
    var that = this;
    that.data = str;
    that.currentPostion = 0;
    that.dataLength = str.length;
}

Reader.prototype.nextChar = function() {
    var that = this;
    if(that.currentPostion >= that.dataLength) {
        return -1; // end
    }
    return that.data[that.currentPostion++];
}

Reader.prototype.retract = function(n) {
    var that = this;
    
    if( n == undefined ) {
        n = 1;
    }
    
    that.currentPostion -= n;

    if (that.currentPostion < 0) {
        that.currentPostion = 0;
    }
}

module.exports = Reader;
