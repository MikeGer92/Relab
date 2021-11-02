<template class="user-item"  v-for="user in usersList">
  <div>
    <div class="item_id">{{ id }}</div>
    <div class="item_name">{{ name }}</div>
    <div class="item_role">{{ role }}</div>
    <div class="item_ctime">{{ ctime }}</div>

</div> 
</template>

<script>


export default {
  name: 'Useritem',
  props: ['item'],
  errors: [],
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
      id: 90,
      name: 'Jully',
      role: 'Serv',
      ctime: '10.09.2000 10:16'
    }
  },
  
}

</script>