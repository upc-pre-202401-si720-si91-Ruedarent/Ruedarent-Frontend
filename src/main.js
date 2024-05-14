//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from "primevue/config";
import router from './router'

const app = createApp(App)

import 'primeicons/primeicons.css';


import Toast from "primevue/toast";
import Card from "primevue/card";
import Button from "primevue/button";
import Toolbar from 'primevue/toolbar';
import Menubar from "primevue/menubar";
import InputSwitch from "primevue/inputswitch";
import Image from "primevue/image";
import Sidebar from "primevue/sidebar";

//import 'primeflex/primeflex.css';


import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';



app.use(router)

app.use(PrimeVue);

app.component('pv-toast', Toast);
app.component('pv-button', Button);
app.component('pv-card',Card);
app.component('pv-toolbar', Toolbar);
app.component('pv-menubar', Menubar);
app.component('pv-inputswitch', InputSwitch);
app.component('pv-image', Image);
app.component('pv-sidebar', Sidebar);

app.mount('#app')
