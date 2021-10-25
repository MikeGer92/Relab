<template>
  <div class="home">
    <Header></Header>
    <Logo></Logo>
    <Welcome msg="Добро пожаловать!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Logo from '@/components/Logo.vue'
import Welcome from '@/components/Welcome.vue'

export default {
  name: 'Home',
  components: {
    Welcome,
    Header,
    Logo
  }
}
</script>
