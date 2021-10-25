<template>
  <div class="auth">
    <Header></Header>
    <Logo></Logo>
    <h1>Авторизация</h1>
    <div class="authform">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Logo from '@/components/Logo.vue'

export default {
  name: 'Auth',
  components: {
    Header,
    Logo,
  }
}
</script>

<style scoped>
.auth {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.authform {
  display: flex;
  justify-content: center;
  width: 750px;
  height: 600px;
}
</style>