# Refactor the constructor to use property arguments. Also, set @level to be an optional argument by setting its default value to 0.

# class Coffee
#   constructor: (name, level) ->
#     @name = name
#     @level = level or 0

#   isRussian: -> @name is 'Russian'

class Coffee
  constructor: (@name, @level=0) ->
  isRussian: -> @name is 'Russian'