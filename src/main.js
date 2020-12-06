import Vue from 'vue'
import axios from 'axios'
import router from './router'
import store from './store'
import App from './views/App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

axios.defaults.baseURL = "http://localhost:8080";

Vue.prototype.$http = axios;
const token = localStorage.getItem('token');
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

firebase.initializeApp({
  apiKey: "AIzaSyAHzCcyzzXlMTPwYQdrSRHO57gDWVEHrL4",
  authDomain: "vue-auth-359ef.firebaseapp.com",
  projectId: "vue-auth-359ef",
  storageBucket: "vue-auth-359ef.appspot.com",
  messagingSenderId: "390765845991",
  appId: "1:390765845991:web:9275eefc74a6731810b142"
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
});
