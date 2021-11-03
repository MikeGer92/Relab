<template>
  <div class="home">
    <Welcome msg="Добро пожаловать!"/>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h3>Список пользователей</h3>
           <TabHeaderUser></TabHeaderUser>
          <Useritem :user-url="userUrl"></Useritem>
          </div>
        <div class="col-md-4"><h3>Список событий</h3>
          <TabHeaderEvent></TabHeaderEvent>
        </div>
      </div>
    </div>
  
  </div>
</template>


<script>
import Welcome from '@/components/Welcome.vue';
import Useritem from '@/components/Useritem.vue';
import TabHeaderUser from '@/components/TabHeaderUser.vue';
import TabHeaderEvent from '@/components/TabHeaderEvent.vue';

export default {
  name: 'Home',
  components: {
    Welcome,
    Useritem,
    TabHeaderUser,
    TabHeaderEvent
  },
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
