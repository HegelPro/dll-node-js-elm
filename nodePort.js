const { ipcMain } = require('electron')

const lib = require('./lib')

ipcMain.on('fromJsToNode', (event, arg) => {
  console.log('fromJsToNode', arg)

  lib.countDivUnsignedInt(arg.a, arg.b)

  if (lib.getErrorCode() === 0) {
    event.reply('fromNodeToJs', lib.getResult())
  } else {
    event.reply('fromNodeToJsError', lib.getErrorCode())
  }

})