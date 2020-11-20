const path = require('path')
const ffi = require('ffi-napi')

const lib = ffi.Library(path.join(__dirname, './lib/Lib.dll'), {
  'countDivUnsignedInt': [ 'void', ['uint', 'uint'] ],
  'getErrorCode': [ 'uint', [] ],
  'getResult': [ 'uint', [] ],
})

module.exports = lib
