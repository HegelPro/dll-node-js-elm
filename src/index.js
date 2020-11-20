const elm = require('./elm')

elm.ports.fromElmToJs.subscribe((arg) => {
    console.log('fromElmToJs', arg)

    ipcRenderer.send('fromJsToNode', arg)
})

ipcRenderer.on('fromNodeToJs', (_, arg) => {
    console.log('fromNodeToJs', arg)

    elm.ports.fromJsToElm.send(arg)
})

ipcRenderer.on('fromNodeToJsError', (_, arg) => {
    console.log('fromNodeToJsError', arg)

    if (arg === 1) {
        alert('Пожалуйста, выберете первое число меньше')
    } else if (arg === 2) {
        alert('Пожалуйста, выберете второе число меньше')
    } else if (arg === 3) {
        alert('На 0 делить нельзя')
    }
})