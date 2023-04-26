import { createApp } from 'vue'
import App from './App.vue'
import { OhVueIcon, addIcons } from "oh-vue-icons";

import { 
    LaPlusSolid,
    BiPersonPlusFill,
    RiCheckboxMultipleFill,
    BiClock,
    CoPencil,
    IoSettingsSharp,
    IoLogOutOutline,
    CoUser,
    BiKey
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

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount('#app')
