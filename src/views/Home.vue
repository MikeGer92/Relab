<template>
  <div class="home">
    <h1>Добро пожаловать!</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h3>Список пользователей</h3>
           <TabHeaderUser></TabHeaderUser>
          <Useritem :user-url="userUrl"></Useritem>
          </div>
        <div class="col-md-4"><h3>Список событий</h3>
          <TabHeaderEvent></TabHeaderEvent>
          <div class="data-row" id="data-row">
            <p id="date"></p>
            <p id="res"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Useritem from '@/components/Useritem.vue';
import TabHeaderUser from '@/components/TabHeaderUser.vue';
import TabHeaderEvent from '@/components/TabHeaderEvent.vue';

export default {
  name: 'Home',
  components: {
    Useritem,
    TabHeaderUser,
    TabHeaderEvent
  },
  data() {
    return {
      userUrl: '/users/list',
      connection: null,
      events: []
    }
  },
  created: function() {
    console.log('Start connection')
      this.connection = new WebSocket('wss://test.relabs.ru/event')

      this.connection.onopen = function(event) {
        console.log(event)
        console.log('Successfully connected to wss-relab')
          

      }
      this.connection.onmessage = function(event) {
        console.log(event.data)
        let message = event.data;
        let newMess = JSON.parse(message)
        // this.events.push(JSON.parse(message))
        let curTime = (new Date(newMess.ctime * 1000).toLocaleString().replace(',', ''));
        let curEvent = newMess.event
        let dateElem = document.createElement('div');
        dateElem.style.borderBottom = "solid 1px #444141"
        dateElem.textContent = curTime
        let pEvent = document.createElement('div');
        pEvent.style.borderBottom = "solid 1px #444141"
        pEvent.textContent = curEvent
        document.getElementById('date').prepend(dateElem)
        document.getElementById('res').prepend(pEvent)

        
      }

  }
    
}
</script>

<style scoped>
h3 {
  padding: 50px 0;
}
.data-row {
    display: flex;
    /* flex-direction: column; */
    text-align: left;
}
p {
   flex-basis: 50%;  
}
.ndate {
  border-bottom: solid 1px #444141; 
}
</style>
