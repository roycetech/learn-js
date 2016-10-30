function Tour(price) {
  this.price = price;
  this.cost = function(nights) {
    console.log(nights * this.price);
  };
  console.log("A new Tour was created");
}
$(document).ready(function() {
  var tour = new Tour(100);
  tour.cost(4);
});

