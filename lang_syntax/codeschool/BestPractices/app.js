var InvertedPeninsula = function() {
  this.inhabitants = [
    {
      name: 'Flanery',
      race: 'Human'
    },
    {
      name: 'Sir Charles',
      race: 'Human'
    },
    {
      name: 'Ealei',
      race: 'Elf'
    },
    {
      name: 'Orado',
      race: 'Spector'
    }
  ];

  this.inhabitants.getRace = function(race) {
    var members = [];
    for (var i=0, l = this.length; i < l; i++) {
      if (this[i].race === race) {
        members.push(this[i]);
      }
    }

    return members;
  };

  this.inhabitants.humans = function() {
    return this.getRace('Human');
  };

  this.inhabitants.elves = function() {
    return this.getRace('Elf');
  };

  this.inhabitants.spectors = function() {
    return this.getRace('Spector');
  };
};



// Create a new invertedPeninsula
var invertedPeninsula = new InvertedPeninsula();

// Log the name of each invertedPeninsula inhabitant
for (var i=0;i<invertedPeninsula.inhabitants.length;i++) {
  console.log(invertedPeninsula.inhabitants[i].name);
}

