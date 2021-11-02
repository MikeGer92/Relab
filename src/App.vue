<template>
  <div id="app">
    <Header></Header>
    <Logo></Logo>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Logo from '@/components/Logo.vue'
export default {
  name: 'App',
  components: {
    Header,
    Logo
  }
  }


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
