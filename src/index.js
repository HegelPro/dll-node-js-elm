const elm = require('./elm')

elm.ports.fromElmToJs.subscribe((arg) => {
    console.log('fromElmToJs', arg)

    ipcRenderer.send('fromJsToNode', arg)
})

ipcRenderer.on('fromNodeToJs', (_, arg) => {
    console.log('fromNodeToJs', arg)

    elm.ports.fromJsToElm.send(arg)
})

ipcRenderer.on('fromNodeToJsError', () => {
    console.log('fromNodeToJsError')

    alert('Результат не может быть подсчитан с введёнными параметрами')
})