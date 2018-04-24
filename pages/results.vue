<template lang="pug">
div
  nav.navbar.navbar-expand-lg.navbar-light.bg-light
    a.navbar-brand(href='/') groksrc search

  .row(v-for="result in results" :key="result.title")
    .col
      .card.border-light.w-100
        .card-body
          h5.card-title
            a.text-primary(:href="result.url") {{ result.title }}
          p.card-text {{ result.desc }}
          a.text-primary(:href="result.url") {{ result.url }}

</template>
<script>
import fetch from 'isomorphic-fetch'
export default {
  async asyncData () {
    const response = await fetch('https://firebasestorage.googleapis.com/v0/b/groksrc-nuxt-490a2.appspot.com/o/results.json?alt=media&token=9ce8725e-5a07-41f1-83b9-55d4fa816ffc')
    const results = await response.json()
    return { results }
  }
}
</script>
<style>
a:hover.navbar-brand {
  text-decoration: underline;
}
</style>
