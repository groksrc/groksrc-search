<template lang="pug">
div
  nav.navbar.navbar-expand-lg.navbar-light.bg-light
    a.navbar-brand(href='/') groksrc search | home

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
export default {
  data () {
    return {
      results: [
        {
          title: "Home Page (Drew Cain)",
          desc: "Read more about Drew Cain at groksrc.com",
          url: "http://groksrc.com"
        },
        {
          title: "Drew Cain on LinkedIn",
          desc: "Read more about Drew Cain at groksrc.com",
          url: "http://linkedin.com/in/groksrc"
        },
        {
          title: "Why Search Results for Drew Cain are always the same",
          desc: "The clickbait article explains to you in simplistic terms...",
          url: "/about"
        }
      ]
    }
  }
}
</script>
