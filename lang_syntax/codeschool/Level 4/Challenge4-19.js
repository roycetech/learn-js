var rockSpearguns = {
  Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
  Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
  Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
  Firefork: {barbs: 6, weight: 8, heft: "overhand"},
  "The Impaler": {barbs: 1, weight: 30, heft: "chest"},
  listGuns: function() {
    for (var property in this) {
      if (this[property].heft) {
        console.log("Behold! " + property + ", with " + this[property].heft + " heft!");
      }
    }
  }
};


// call listGuns using bracket notation on rockSpearguns
rockSpearguns['listGuns']();
