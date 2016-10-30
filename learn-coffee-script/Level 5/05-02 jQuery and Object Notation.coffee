# Wrap the following code into an init function that belongs to a new object named coffeeList. After defining coffeeList, invoke the coffeeList.init function.


# $('.drink a').click (e) ->
#   e.preventDefault()
#   alert $(@).text()

coffeeList =
  init: ->
    $('.drink a').click (e) ->
      e.preventDefault()
      alert $(@).text()

coffeeList.init()

