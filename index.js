console.log("-------- require('./utils.js') --------");
var utils = require('./utils.js');
utils.hello();

console.log("-------- require('./utils') --------");
var utils2 = require('./utils');
utils2.hello();

console.log("-------- require('./core') --------");
var core = require('./core');
core.hello();

console.log("-------- require('./core.js') --------");
try {
  var core = require('./core.js');
  core.hello();
} catch (e) {
  console.log(e.message);
}