/** Great! Lets make it a little easier to use our Vacation object by creating a custom promise and handling the result output ourselves. That way instead of needing result.price in the 'application.js', you'll be able to just use result.

Use $.Deferred() to create your own promise (set the promise variable with this), and use the .resolve() function to pass the result to the .done() callback.

The demo for this won't work yet because we're still looking for result.price, but we'll change that next. */


var Vacation = {
  getPrice: function(location){
    var promise = $.Deferred();

   $.ajax('/vacation/prices', {
     data: {q: location},
     success: function(result) {
        promise.resolve(result.price);
     }
   });

   return promise;
  }
};
