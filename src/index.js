const elm = require('./elm')

elm.ports.requestResult.subscribe((arg) => {
    console.log('requestResult', arg)

    ipcRenderer.send('asynchronous-message', arg)
})

ipcRenderer.on('asynchronous-reply', (_, arg) => {
    console.log('asynchronous-reply', arg)

    elm.ports.messageReceiver.send(arg)
})
