<template>
  <div id="app">
    <navTop/>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import nav from '@/components/nav.vue'

export default {
  name: 'app',
  components: {
    navTop:nav
  }
}
</script>

<!--<style lang="less">-->
<!--html,body{-->
<!--  margin: 0;-->
<!--  padding: 0;-->
<!--}-->
<!--ul li{-->
<!--  list-style: none;-->
<!--}-->
<!--</style>-->
<style>
html,body{
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
</style>
