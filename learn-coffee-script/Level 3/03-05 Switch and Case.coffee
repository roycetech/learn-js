# if (newLevel === 1) {
#   message = 'Out of bed yet?';
# } else if (newLevel === 2) {
#   message = 'Good morning!';
# } else {
#   message = 'You should stop while you can';
# }

switch newLevel
  when 1 then message = 'Out of bed yet?'
  when 2then message = 'Good morning!'
  else message = 'You should stop while you can'

