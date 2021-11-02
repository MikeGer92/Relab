<template>
  <div class="home">
    <Welcome msg="Добро пожаловать!"/>

  </div>
</template>

<script>
import Welcome from '@/components/Welcome.vue'
// import Useritem from '@/components/Useritem'

export default {
  name: 'Home',
  components: {
    Welcome,
  },

  usersList: [
        {
            id: 25,
            name: 'mike',
            role: 'admin',
            ctime: '26.10.2021 16:37'
            },
        {
            id: 2,
            name: 'nick',
            role: 'manage',
            ctime: '27.10.2021 10:28'
            },
    ]
}
</script>
