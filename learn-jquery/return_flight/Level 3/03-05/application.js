$(document).ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    $.ajax('/book', {
      type: 'POST',
      data: $('form').serialize(),
      success: function(response) {
        $('.tour').html(response);
      }
    });
  });
});

