/** You're almost finished! All that's left is to change result.price to result in your application.js. */

var Vacation = {
 getPrice: function(location){
   var promise = $.Deferred();
   $.ajax({
     url: '/vacation/prices',
     data: {q: location},
     success: function(result){
       promise.resolve(result);
     }
   });
   return promise;
 }
};
