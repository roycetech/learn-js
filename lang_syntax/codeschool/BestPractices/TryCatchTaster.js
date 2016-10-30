function Bird(){}
function DatatypeBird(){}
function SyntaxBird(){}
DatatypeBird.prototype = Object.create(Bird.prototype);
SyntaxBird.prototype   = Object.create(Bird.prototype);

var TryCatchTaster = function(){},
    SwitchSnagger  = function(){},
    TernaryTracker = function(){};

TryCatchTaster.prototype = Object.create(SyntaxBird.prototype);
SwitchSnagger.prototype  = Object.create(SyntaxBird.prototype);
TernaryTracker.prototype = Object.create(SyntaxBird.prototype);

var NumberNommer = function(){},
    StringSeeker = function(){},
    BooleanBiter = function(){};

NumberNommer.prototype = Object.create(DatatypeBird.prototype);
StringSeeker.prototype = Object.create(DatatypeBird.prototype);
BooleanBiter.prototype = Object.create(DatatypeBird.prototype);

var duneInhabitants = [NumberNommer, StringSeeker,
  TryCatchTaster, SwitchSnagger, TernaryTracker, BooleanBiter];