import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import * as firebase from 'firebase'
import router from './router'
import store from './Store/store'

axios.defaults.baseURL = 'https://test-969b8.firebaseio.com'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyACcDHD9prx8OSOZODNKvUmU2c-Fhq4FsI',
      databaseURL: 'https://test-969b8.firebaseio.com/',
      projectId: 'test-969b8',
      storageBucket: 'gs://test-969b8.appspot.com'
    })
  }
})