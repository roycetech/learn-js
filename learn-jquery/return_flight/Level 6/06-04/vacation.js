var Vacation = {
  getPrice: function(location){
   var promise = $.ajax('/vacation/prices', {
     data: {q: location}
   });

   return promise;
  }
}

