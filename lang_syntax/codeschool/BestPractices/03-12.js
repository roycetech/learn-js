function Bird(){}
function DatatypeBird(){}
function SyntaxBird(){}
DatatypeBird.prototype   = Object.create(Bird.prototype);
SyntaxBird.prototype     = Object.create(Bird.prototype);

TryCatchTaster.prototype = Object.create(SyntaxBird.prototype);

var NumberNommer = function(){};
NumberNommer.prototype = Object.create(DatatypeBird.prototype);

var duneInhabitants = [NumberNommer, StringSeeker, TryCatchTaster,
                       SwitchSnagger, TernaryTracker, BooleanBiter];