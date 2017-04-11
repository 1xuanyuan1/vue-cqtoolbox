<template>
  <div id="app">
    <navbar></navbar>
    <app-main></app-main>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import AppMain from '@/components/AppMain'
import FooterBar from '@/components/FooterBar'
export default {
  name: 'app',
  components: {
    Navbar,
    AppMain,
    FooterBar
  },
  methods: {
    show (type) {
      console.log('app', type)
      this.$refs.modal.show(type)
    }
  }
}
</script>

<style lang="scss">
@import "~bulma";
/* 自定义基础属性 */
@import "~scss/base.scss";
/* 自定义样式 */
@import "~scss/style.scss";
</style>
