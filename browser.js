
var Leveljs = require('level-js')

module.exports = require('level-packager-es5')(function(l) {
  return new Leveljs(l)
})
