# groksrc search

> groksrc search is a demo project that shows you how to set up [nuxt.js](http://nuxtjs.org) on [Firebase](https://firebase.google.com)

## Things to know

This nuxt.js issue was very helpful: https://github.com/nuxt/nuxt.js/issues/1634

You might also like David East's video: https://www.youtube.com/watch?v=ZYUWsjUxxUQ

This project does not follow the video. Instead inspiration is taken from [qm3ster](https://github.com/qm3ster) in the comments on nuxt.js issue #1634.

## Getting Started

``` bash
# install external dependencies
$ npm install -g vue-cli
$ npm install -g firebase-tools

# install project dependencies
$ yarn install # Or npm install

# serve with hot module reload at localhost:3000
$ yarn dev

# build for production and launch server

$ yarn push
```

## Firebase Commands

``` bash
# before you deploy you must init the project with your firebase project to create a .firebaserc
# NOTE: this command may overwrite firebase.json. Make sure that no important lines are lost
$ firebase init

# run via firebase-tools
$ firebase serve --only hosting,functions
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
