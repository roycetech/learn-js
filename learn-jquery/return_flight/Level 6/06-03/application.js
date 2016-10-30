$(document).ready(function(){
  $('button').on(click, function(){
    var location = $('.location').text();
    $.ajax('/vacation/prices', {
      data: {q: location},
      success: function(result){
        $('.price').text(result.price);
      }
    });
  });
});

