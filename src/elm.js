'use strict'

const Elm = require('./Main.elm').Elm

const elm = Elm.Main.init({
  node: document.getElementById('app')
})

module.exports = elm