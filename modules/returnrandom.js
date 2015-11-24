var Random = {
  returnRand: function(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
  },
};

module.exports = Random;

//returnrandom.js will give you access to Random bc Random = module.exports
