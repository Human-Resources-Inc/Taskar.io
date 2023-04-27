import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt';
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

const app = createApp(App);
const emitter = mitt();
app.config.globalProperties.emitter = emitter;
app.component("v-icon", OhVueIcon);
app.mount('#app')
