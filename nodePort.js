const { ipcMain } = require('electron')

const lib = require('./lib')

ipcMain.on('asynchronous-message', (event, arg) => {
  console.log('asynchronous-message', arg)

  event.reply('asynchronous-reply', lib.divUnsignedInt(arg.a, arg.b))
})