import {createApp} from 'vue'
import TDesign from 'tdesign-vue-next';
import App from './App.vue'
import './style.css'
import {state} from "./state";
import router from "./router";

const app = createApp(App)

app.use(router)
app.use(state)
app.use(TDesign)
app.mount('#app')
