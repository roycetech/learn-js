/** Now you need to create the array of html elements. Create an array of li elements, each with the flightNumber and the time from the ajax result. Insert the resulting array into the .flight-times unordered list element. */


$('.update-available-flights').on('click', function() {
  $.getJSON('/flights/late', function(result) {

    var flightElements = $.map(result, function(flightItem, index){
      var elements = $('<li></li>');
      $('<p>'+flightItem.flightNumber+'</p>').appendTo(elements);
      $('<p>'+flightItem.time+'</p>').appendTo(elements);
      return elements;
    });

    $('.flight-times')
        .detach()
        .html(flightElements)
        .appendTo('.flights');

  });
});

