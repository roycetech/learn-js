/** Lets edit the original code to use the Vacation object we just created. Add a .done() callback function to your Vacation object that will run the same function as our current success callback. */

$(document).ready(function() {
  $('button').on('click', function(){
    var location = $('.location').text();
        Vacation.getPrice(location).done(function(result){
        $('.price').text(result.price);
      });
  });
});

