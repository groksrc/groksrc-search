const functions = require('firebase-functions')
const { Nuxt } = require('nuxt-start')

const config = require('./nuxt.config.js')

config.dev = false
const nuxt = new Nuxt(config)

exports.app = functions.https.onRequest(nuxt.render)
