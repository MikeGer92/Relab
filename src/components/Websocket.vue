<template>
    <div class="data-row">
        <p>Дата</p>
        <p>Событие</p>
    </div>
</template>

<script>

export default {
  name: 'Websocket',
    data() {
      return {
        connection: null,
        events: []
      }
    },
    methods: {
      sendMessage: function(message) {
        console.log(this.connection)
        this.connection.send(message)
      }
    },
    created: function() {
      console.log('Start connection')
      this.connection = new WebSocket('wss://test.relabs.ru/event')

      this.connection.onopen = function(event) {
        console.log(event)
        console.log('Successfully connected to wss-relab')
        this.events.push(event)
      }

      this.connection.onmessage = function(event) {
        console.log(event)
      }
    }
  }
</script>

<style scoped>
.data-row {
    display: flex;
    text-align: left;
    border-bottom: solid 1px #444141;
}
p {
   flex-basis: 50%;
    
}
</style>