$(document).ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    $.ajax('/book', {
      type: 'POST',
      dataType: 'json',
      data: $('form').serialize(),
      success: function(json) {
        $('.tour').html(json.description +
          json.price + json.nights + json.confirmation);
      }
    });
  });
});

