var LEXICALLAKE = (function(answer, foundShore) {

  var depth = 400;
  var fish = 1200;
  var unknownSleepers = 3;

  return {
    getFish: function() { return fish; },
    getDepth: function() { return depth; },
    getSleepers: function() { return unknownSleepers; },
    awakenSleeper: function() {
      alert('Far below, in the deep, something awakens. Row faster.');
    },
    summonBoat: function() {
      if (answer === 'agnostic') {
        alert('The boat fades into view.');
      }
      else {
        alert('...the lake is silent.');
      }
    },
    stopSleeper: function() {
      if (foundShore === true) {
        console.log('That which has awaken shall now return to slumber.');
      } else {
        alert('A Sleeper cometh. Abandon hope.');
      }
    }
  };
})('agnostic', true);

LEXICALLAKE.stopSleeper();
