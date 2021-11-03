// import Vue from 'vue';
export const range = (start, end) => {
    return [...Array(end).keys()].map(el => el + start);
};

// import VueNativeSock from 'vue-native-websocket';

// import store from './store';

// Vue.use(VueNativeSock, 'wss://test.relabs.ru/event', {   
// reconnection: true,
// reconnectionAttempts: 5, 
// reconnectionDelay: 3000, 
// format: 'json',
// store: store
// });

// const vm = new Vue();
// // Connect to the websocket target specified in the configuration
// vm.connect();
// // do stuff with WebSockets
// vm.$disconnect();

