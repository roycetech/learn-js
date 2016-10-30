# Make the Coffee class inherit from Drink and override the serve method to return false if @sleeve is false, otherwise invoke the superclass method. (Note: The Drink class is defined below)

# class Coffee
#   constructor: (@name, @level=0) ->

class Coffee extends Drink
  serve: ->
    if not @sleeve
      false
    else
      super