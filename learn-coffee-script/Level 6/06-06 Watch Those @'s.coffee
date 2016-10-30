# Fix the bug on the code below, which is causing the @linkClicked variable to not be properly set when a link is clicked.

class DrinkLink
  constructor: (@linkClicked=false) ->
  watchClick: ->
    $('.drink a').click (event) =>
      $(event.target).css('color', '#F00')
      @linkClicked = true

