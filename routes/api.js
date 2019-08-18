/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res, next){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var spelledUnit = convertHandler.spellOutUnit(returnUnit)
      var toString = convertHandler.getString(initNum, initUnit, isNaN(returnNum) ? returnNum : returnNum.toFixed(5), spelledUnit);
      if (isNaN(returnNum) && returnNum.includes('invalid')) {
        res.status(404)
        next(new Error(returnNum))
      } else {
        res.json({initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: toString})
      }
      //res.json
    });
    
};

