# Create a Coffee class that will produce coffee objects. In that class, create a constructor that takes name and level as arguments and sets them as instance variables. Also, make sure you create a function called isRussian.


# coffee =
# name: 'Russian'
# level: 2
# isRussian: -> @name is 'Russian'

coffee =
  name: 'Russian'
  level: 2
  isRussian: -> @name is 'Russian'

class Coffee
  constructor: (@name, @level) ->
  isRussian: -> @name is 'Russian'
