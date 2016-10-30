# Change the displayTopPicks function to accept a variable number of suggested coffees by using the splat operator. Use suggested.join(", ") to alert all of the suggested coffees.


# displayTopPicks = (bestCoffee, suggested) ->
#   alert('Top #1 ' + bestCoffee)
#   alert('Suggested: ' + suggested)

displayTopPicks = (bestCoffee, suggested...) ->
  alert('Top #1 ' + bestCoffee)
  alert('Suggested: ' + suggested)

