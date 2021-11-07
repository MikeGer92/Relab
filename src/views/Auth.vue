<template>
  <div class="auth">
    <h1>Авторизация</h1>
    <Authform></Authform>
  </div>
</template>

<script>
import Authform from '@/components/Authform.vue'


export default {
  name: 'Auth',
  components: {
    Authform,
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