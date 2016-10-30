$('button').on('click', function() {
  $.ajax('/cities/deals', {
    success: function(result) {
      $.each(result, function(index, dealItem) {
        var el = $('.deal-'+index)
        el.find('.name').html(dealItem.name);
        el.find('.price').html(dealItem.price);
      });
    }
  });
});

