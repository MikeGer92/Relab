<template>
  <div class="home">
    <Welcome msg="Добро пожаловать!"/>
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <h3>Список пользователей</h3>
          <Useritem :user-url="userUrl"></Useritem>
          </div>
        <div class="col-md-5"><h3>Список событий</h3>
        <div>Это список событий</div>
        </div>
      </div>
    </div>
  
  </div>
</template>


<script>
import Welcome from '@/components/Welcome.vue'
import Useritem from '@/components/Useritem'

export default {
  name: 'Home',
  components: {
    Welcome,
    Useritem
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
    ],
    data() {
      return {
        userUrl: '/users/list'
      }
    }
}
</script>

<style scoped>
h3 {
  padding: 50px 0;
}
</style>
