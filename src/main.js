import Vue from 'vue'
import App from './App.vue'
import store from './store'

import router from './router'


import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';


Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBVaYtWRCMAqaDi0CLqtxq4P-rZUfgYsnM",
  authDomain: "pyshop-test-todo.firebaseapp.com",
  databaseURL: "https://pyshop-test-todo-default-rtdb.firebaseio.com",
  projectId: "pyshop-test-todo",
  storageBucket: "pyshop-test-todo.appspot.com",
  messagingSenderId: "207085003807",
  appId: "1:207085003807:web:9f16b957c8a2d3f840212a"
};
firebase.initializeApp(firebaseConfig);


firebase.auth().onAuthStateChanged(() => {
  new Vue({
    store,
    router,
    render: h => h(App)
  }).$mount('#app')
})