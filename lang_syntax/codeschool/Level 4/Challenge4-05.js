var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

// add and adjust object properties here
vehicle1.capacity += 4;
vehicle1.submersible = false;
vehicle1.weapon = 'Rear-Mounted Slingshot';


vehicle2.submersible = false;
vehicle2.weapon = 'Lasers';

vehicle3.weapon = 'Torpedoes';
vehicle3.capacity *= 2;
vehicle3.submersible = true;