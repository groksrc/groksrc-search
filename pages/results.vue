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
export default {
  data () {
    return {
      results: [
        {
          title: "Drew Cain on LinkedIn",
          desc: "Read more about Drew Cain at groksrc.com",
          url: "http://linkedin.com/in/groksrc"
        },
        {
          title: "Drew Cain is on Twitter",
          desc: "The latest Tweets from Drew Cain (@GrokSrc)",
          url: "https://www.twitter.com/groksrc"
        },
        {
          title: "Home Page (Drew Cain)",
          desc: "Read more about Drew Cain at groksrc.com",
          url: "http://groksrc.com"
        },
        {
          title: "Why Search Results for Drew Cain are always the same",
          desc: "The clickbait article explains to you in simplistic terms that millennials can relate with why...",
          url: "/about"
        },
        {
          title: "Drew Cain (Billy Miller) | General Hospital Wiki | FANDOM powered by ...",
          desc: "Chief Andrew \"Drew\" Cain is a fictional character on the ABC soap opera, General Hospital. This is not the droid you are looking for...",
          url: "http://general-hospital.wikia.com/wiki/Drew_Cain_(Billy_Miller)"
        }
      ]
    }
  }
}
</script>
<style>
a:hover.navbar-brand {
  text-decoration: underline;
}
</style>
