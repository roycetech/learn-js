$('.update-available-flights').on('click', function() {
  $.getJSON('/flights/late', function(result) {
    $.map(result, function(item, index) {
        console.log(item);
    });
  });
});

