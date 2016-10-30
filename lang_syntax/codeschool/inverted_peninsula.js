var InvertedPeninsula = function() {
  this.inhabitants = [
    {
      name: 'Sir Charles',
      race: 'Human'
    },
    {
      name: 'Ealei',
      race: 'Elf'
    }
  ];
  // Adds an extra humans method property to the inhabitants array to return all Humans
  this.inhabitants.humans = function() { /* returns all Human inhabitants */ };
};

// Create a new invertedPeninsula
var invertedPeninsula = new InvertedPeninsula();

// Log the name of each invertedPeninsula inhabitant
for (var i in invertedPeninsula.inhabitants) {
  console.log(i);
  console.log(invertedPeninsula.inhabitants[i].name);
}