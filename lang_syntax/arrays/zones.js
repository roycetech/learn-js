function warningMaker(obstacle) {
  var count = 0;
  var zones = [];
  return function(number, location) {
    count++;
    var list = "";
    zones.push(location);

    // add each zone to the list string
    for (var i=0; i<zones.length;i++) {
      list += "\n" + zones[i];
    }

    console.log("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          "This is alert #" + count +
          " today for " + obstacle + " danger.\n" + "Current danger zones are:" + list
    );
  };
}

blizzard = warningMaker("Bizzard");
blizzard(3, 'Penguins');

