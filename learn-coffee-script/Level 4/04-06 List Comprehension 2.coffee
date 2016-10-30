# Refactor the code below to make use of list comprehension.

# for coffee in coffeeList
#   if not coffee.isRussian?()
#     addCoffee(coffee)

addCoffee(coffee) for coffee in coffeeList when not coffee.isRussian?()


