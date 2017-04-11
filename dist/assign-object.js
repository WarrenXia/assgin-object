/* version: 1.0.5 | author: Neo Xia <xsh613@gmail.com> | license: MIT | github: git@github.com:WarrenXia/assign-object.git | Date: 2017-04-11 19:46:07 */
(function() {
  function assignObject() {

    if (Object.assign) {
      return Object.assign.apply(this, arguments);
    }

    var newObj = {};
    var argLen = arguments.length;

    if (argLen === 0) {
      console.warn('no object to assign');
      return null;
    }

    for (var i = 0; i < argLen; i++) {
      if (Object.prototype.toString.call(arguments[i]).slice(8, -1) === 'Object') {
        for (j in arguments[i]) {
          newObj[j] = arguments[i][j];
        }
      } else {
        console.warn((i + 1) + 'th argument is not a pure object');
      }
    }
    return newObj;
  }

  if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
    define(function() {
      return assignObject;
    });
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = assignObject;
  } else {
    window.assignObject = assignObject;
  }
})();
