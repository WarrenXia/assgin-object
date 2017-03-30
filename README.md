# assign-object

assign javascript objects

## Use the built-in

Node.js 4 and up, as well as every evergreen browser (Chrome, Edge, Firefox, Opera, Safari), support `Object.assign()` :tada:. If you target only those environments, then by all means, use `Object.assign()` instead of this package.

## Install

```
$ npm install --save assign-object
```

## Useage

### In node environment
```javascript
var assignObject = require('assign-object');

assignObject({1:2}, {2:5});
//=>{1:2, 2:5}

// overwrites equal keys
assignObject({1:2}, {2:5}, {2:4});
//=>{1:2, 2:4}

// warn with null and undefined
assignObject({1:2}, {2:5}, null);
//=>warn:3th argument is not a pure object
//=>{1:2, 2:5}

```
### In browser

You can use in the browser, the dist folder contains a compressed and uncompressed version below
