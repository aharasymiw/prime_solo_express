var dollarMaker = function(dollar) {
  return '$' + dollar + '.00 USD';
};

module.exports = dollarMaker;

//convert.js gives access to dollarMaker which is the function that converts
//a # to a dollar amount
