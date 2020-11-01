const path = require('path')
const ffi = require('ffi-napi')

const lib = ffi.Library(path.join(__dirname, './lib/Lib.dll'), {
  'divUnsignedInt': [ 'uint', ['uint', 'uint'] ]
})

module.exports = lib
