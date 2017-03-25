function assginObject() {

  if (Object.assign) {
    return Object.assign(arguments);
  }

  var newObj = {};
  var argLen = arguments.length;

  if (argLen === 0) {
    console.warn('no object to assgin');
  }

  for (var i = 0; i < argLen; i++) {
    if (Object.prototype.toString.call(arguments[i]).slice(8, -1) === 'Object') {
      for (j in arguments[i]) {
        newObj[j] = arguments[i][j];
      }
    } else {
      console.warn(i + 'th argument is not a pure object');
    }
  }
  return newObj;
}

module.exports = assginObject;
