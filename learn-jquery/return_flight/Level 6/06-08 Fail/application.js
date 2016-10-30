/** Finish up handling errors by adding a fail handler to your application.js that logs the error to the console. */

$(document).ready(function() {
  $('button').on('click', function(){
    var location = $('.location').text();
    Vacation.getPrice(location)
        .done(function(result){
        $('.price').text(result);
        })
    .fail(function(error) {
        console.log(error);
    });
  });
});

