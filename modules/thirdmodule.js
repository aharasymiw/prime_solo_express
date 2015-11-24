var returnRandom = require('./returnrandom.js');
var convertDollar = require('./convert.js');

var Pretty = {
  foo: convertDollar(returnRandom(100, 1000000)),
  poo: 'Account Balance: \n',
};

// module.exports = convertDollar(returnRandom.returnRand(100, 1000000));
// module.exports = 'Account Balance: \n';
module.exports = Pretty;

//var pretty is an object.
//convertDollar is a function that takes in the result of the random# generator
//you access the random generator function via returnrandom.returnRand.
