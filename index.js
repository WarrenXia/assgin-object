function assginObject() {

  if (Object.assign) {
    return Object.assign(arguments);
  }

  var newObj = {};
  for (var i = 0; i < arguments.length; i++) {
    if (Object.prototype.toString.call(arguments[i]).slice(8, -1) === 'Object') {
      for (j in arguments[i]) {
        newObj[j] = arguments[i][j];
      }
    } else {
      console.warn(arguments[i] + ' is not a object');
    }
  }
  return newObj;
}

module.exports = assginObject;
