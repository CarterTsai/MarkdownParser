var node_group = [];

var node = function() {
  this.token = "";
  this.parent_node = {};
  this.child_node_left = {};
  this.child_node_right = {};
}

node.prototype.setToken = function(token_data) {
      var that = this;
      that.token = token_data;
}

node.prototype.setParent = function(node) {
      var that = this;
      that.parent_node  = node;
}

node.prototype.setChild = function(node, position) {
      var that = this;
      if( position == "left")
        that.child_node_lefte  = node;
      else
        that.child_node_right  = node;
}

module.exports = node; 
