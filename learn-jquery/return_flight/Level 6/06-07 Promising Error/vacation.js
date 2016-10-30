/** We just realized: what happens if an error is returned with our ajax call? Our custom promise isn't setup to handle errors. We need to add an error handler that can reject your promise. Go ahead and create this error handler and make sure to pass some sort of error message to the reject() function. */


var Vacation = {
  getPrice: function(location){
    var promise = $.Deferred();
    $.ajax({
      url: '/vacation/prices',
      data: {q: location},
      success: function(result){
        promise.resolve(result.price);
      }
    });
    return promise;
  }
};
