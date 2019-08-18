/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    if (!isNaN(input)) return "invalid number"
    var regex = /\d+(\.\d+)?/g
    var unitless = input.match(regex)
    if (unitless === null) return 1
    if (unitless[2]) return "invalid number"
    var result = unitless[1] ? unitless[0] / unitless[1] : unitless[0]
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    var units = {gal: 'l', l: 'gal', mi: 'km', km: 'mi', lbs: 'kg', kg: 'lbs'}
    var regex = /[a-zA-Z]+/
    var unit = input.match(regex)[0]
    result = unit.toLowerCase()
    if (result in units) return unit
    return "invalid unit"
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    var units = {gal: 'l', l: 'gal', mi: 'km', km: 'mi', lbs: 'kg', kg: 'lbs'}
    if (initUnit === "invalid unit") return "invalid unit"
    result = units[initUnit.toLowerCase()]
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    var spelledUnits = {gal: "gallons", l: 'litres', mi: 'miles', km: 'kilometres', lbs: 'pounds', kg: 'kilograms'}
    if (unit === "invalid unit") return "invalid unit"
    result = spelledUnits[unit]
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    if (initNum === 'invalid number' && initUnit === 'invalid unit') {
      return 'invalid number and unit'
    } else if (initUnit === 'invalid unit') {
      return initUnit
    } else if (initNum === 'invalid number') {
      return initNum
    }
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch (initUnit.toLowerCase()) {
      case 'gal':
        result = initNum * galToL
        break
      case 'l':
        result = initNum / galToL
        break
      case 'lbs':
        result = initNum * lbsToKg
        break
      case 'kg':
        result = initNum / lbsToKg
        break
      case 'mi':
        result = initNum * miToKm
        break
      case 'km':
        result = initNum / miToKm
        break
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`
    return result;
  };
  
}

module.exports = ConvertHandler;
