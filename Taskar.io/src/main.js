import { createApp } from 'vue'
import App from './App.vue'
import { OhVueIcon, addIcons } from "oh-vue-icons";

import { 
    LaPlusSolid,
    BiPersonPlusFill,
    RiCheckboxMultipleFill
} from "oh-vue-icons/icons";

import './assets/main.css'

addIcons(LaPlusSolid);
addIcons(BiPersonPlusFill);
addIcons(RiCheckboxMultipleFill);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount('#app')
