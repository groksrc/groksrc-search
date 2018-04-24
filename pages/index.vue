<template lang="pug">
.container
  .row.justify-content-center
    .col-8
      h1.center(class="title") groksrc search
  .row.justify-content-center
    .col-8
      .form-group
        input(type="text" class="form-control" placeholder="Enter a search term" @keyup.enter="search")
  .row.justify-content-center
    .col-sm-4.center
      button.btn.btn-primary.w-75(type="button" @click="search") Search
    .col-sm-4.center
      button.btn.btn-info.btn-lucky.w-75(type="button" @click="getLucky") I'm feeling lucky
</template>
<script>
export default {
  methods: {
    getLucky() {
      window.location = 'http://worldsbiggestpacman.com/'
    },
    search() {
      window.location = '/results'
    }
  }
}
</script>
<style>
.title {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 70px;
  color: #35495e;
  letter-spacing: 1px;
  margin-top: 150px;
  text-align: center;
}
.center {
  text-align: center;
}
</style>
