# Use the existential operator (the ?) to make sure the checkLevel and resetLevel functions are defined before calling them.


# if level?
#   checkLevel(level)
# else
#   resetLevel()


if level?
  checkLevel? level
else
  resetLevel?

