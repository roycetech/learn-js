# $('.drink li').mouseenter(function() {
#   $(this).find('span').show();
# });

$('.drink li').mouseleave ->
  $(@).find('span').hide()
