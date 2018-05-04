# groksrc search

> groksrc search is a demo project that shows you how to set up [nuxt.js](http://nuxtjs.org) on [Firebase](https://firebase.google.com)

Live Demo: https://search.groksrc.com or https://groksrc-nuxt-490a2.firebaseapp.com

## Things to know

This nuxt.js issue was very helpful: https://github.com/nuxt/nuxt.js/issues/1634

You might also like David East's video: https://www.youtube.com/watch?v=ZYUWsjUxxUQ

This project does not follow the video. Instead inspiration is taken from [qm3ster](https://github.com/qm3ster) in the comments on nuxt.js issue #1634.

## Getting Started

Make sure you have the Firebase CLI installed. If you want to recreate this project from scratch you'll also need the Vue CLI tools.

### Setup
``` bash
# install external dependencies
$ npm install -g firebase-tools
$ npm install -g vue-cli # optional
$ git clone git@github.com:groksrc/groksrc-search.git
```

### Install
```
# install project dependencies
$ yarn install # or npm install

# before you deploy you must init the project with your firebase project to create a .firebaserc
# NOTE: this command may overwrite firebase.json. Make sure that no important lines are lost
$ firebase init
```

### Run
```
# serve with hot module reload at localhost:3000
$ yarn dev

# compile for Firebase
$ yarn package-functions

# serve via the firebase cli to test locally
$ firebase serve --only hosting,functions
```

### Publish
```
# build for production and push live
$ yarn push
```

For detailed explanation on how things work, checkout my [blog article about this project](https://medium.com/@groksrc/how-to-vue-ssr-with-nuxt-js-on-firebase-259b3cc1ba92).
