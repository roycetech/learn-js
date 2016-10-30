function Fencepost(x, y, postNum) {
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];
}

Fencepost.prototype = {
  sendRopeTo: function(connectedPost) {
    this.connectionsTo.push(connectedPost);
  },
  removeRope: function(removeTo) {
    var temp = [];
    for (var i = 0; i < this.connectionsTo.length; i++) {
      if (this.connectionsTo[i].postNum != removeTo) {
        temp.push(this.connectionsTo[i]);
      }
    }
    this.connectionsTo = temp;
  },
  movePost: function(x, y) {
    this.x = x;
    this.y = y;
  },
  valueOf: function() {
  return Math.sqrt(this.x * this.x +
                   this.y * this.y);
  }
};

// override the toString method
Fencepost.prototype.toString = function() {
  var posts = "";
  for (var i=0; i < this.connectionsTo.length;i++) {
    posts += this.connectionsTo[i].postNum + "\n";
  }
  var distance = Math.sqrt(this.x * this.x + this.y * this.y);

  return "Fence post #" + this.postNum + ":\n" +
"Connected to posts:\n" + posts +
"Distance from ranch: " + distance + " yards";
};
