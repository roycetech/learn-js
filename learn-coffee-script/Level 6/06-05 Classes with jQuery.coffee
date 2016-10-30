# On the DrinkLink class below, implement the watchClick method so that when any link is clicked, its color is changed to #F00.


# class DrinkLink
#   watchClick: ->

class DrinkLink
  watchClick: ->
    $('a').click ->
      newStyle =
        "color": "#F00"
      $(@).css(newStyle)