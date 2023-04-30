import { createApp } from 'vue/dist/vue.esm-bundler'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Login from './components/Login.vue'
import About from './components/About.vue'
import Board from './components/Board.vue'
import app_ from './app_.vue'
import axios from 'axios';
import mitt from 'mitt';
import { OhVueIcon, addIcons } from "oh-vue-icons";
import store from './store/store.js';

//axios.defaults.withCredentials = true
axios.defaults.baseURL = 'localhost:3000';

axios.interceptors.response.use(undefined, function(error) {
    if (error) {
      const originalRequest = error.config;
      // if (error.response.status === 401 && !originalRequest._retry) {
      //   originalRequest._retry = true;
      //   store.dispatch("LogOut");
      //   return router.push("/login");
      // }
    }
  });

import { 
    LaPlusSolid,
    BiPersonPlusFill,
    RiCheckboxMultipleFill,
    BiClock,
    CoPencil,
    IoSettingsSharp,
    IoLogOutOutline,
    CoUser,
    BiKey,
    IoCloseOutline,
    BiWindowDesktop,
    BiTextLeft,
    LaCommentAlt
} from "oh-vue-icons/icons";

import './assets/main.css'

addIcons(LaPlusSolid);
addIcons(BiPersonPlusFill);
addIcons(RiCheckboxMultipleFill);
addIcons(BiClock);
addIcons(CoPencil);
addIcons(IoSettingsSharp);
addIcons(IoLogOutOutline);
addIcons(CoUser);
addIcons(BiKey);
addIcons(IoCloseOutline);
addIcons(BiWindowDesktop);
addIcons(BiTextLeft);
addIcons(LaCommentAlt);



const User = {
  template: '<div>User</div>',
}

const routes = [
  { path: '/About', component: About },
  { path: '/', component: Login },
  { path: '/login', component: Login },
  { path: '/board', component: Board },
  { path: '/app_', component: app_ },
  { path: '/users/:id', component: User },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


const emitter = mitt();
const app = createApp(App);
app.use(router)
app.use(store)
app.config.globalProperties.emitter = emitter;
app.component("v-icon", OhVueIcon);
app.mount('#app')