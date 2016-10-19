var superBlinders = [
  ["Firestorm", 4000],
  ["Solar Death Ray", 6000],
  ["Supernova", 12000]
];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 0
};


function addRanger(location, name, skillz, station) {
  // increment the number of rangers property
  location.numRangers += 1;

  var ranger = {
    name: name,
    skillz: skillz,
    station: station
  };
  // add the ranger<number> property and assign a ranger object
  location['ranger' + location.numRangers] = ranger;
}

// call addRanger three times to add the new rangers
addRanger(lighthouseRock, 'Nick Walsh', 'magnification burn', 2);
addRanger(lighthouseRock, 'Drew Barontini', 'uppercut launch', 3);
addRanger(lighthouseRock, 'Christine Wong', 'bomb defusing', 1);





