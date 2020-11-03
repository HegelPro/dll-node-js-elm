const { ipcMain } = require('electron')

const lib = require('./lib')

ipcMain.on('fromJsToNode', (event, arg) => {
  console.log('fromJsToNode', arg)

  try {
    event.reply('fromNodeToJs', lib.divUnsignedInt(arg.a, arg.b))
    
  } catch (error) {
    event.reply('fromNodeToJsError')
  }
})