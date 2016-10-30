var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];
var start = 2;

console.log(puzzlers);


var applyAndEmpty = function(input, queue) {

  var result = input;
  var length = queue.length;

  for (var i = 0; i < length; i++) {
    var f = queue[0];
    console.log('Function: ' + f + ', Input: ' + result);
    // result = f(result);
    queue.shift();
  }
  return result;
};

applyAndEmpty(start, puzzlers);

console.log(puzzlers);
