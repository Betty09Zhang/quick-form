import { createApp } from 'vue'
import App from './App.vue'
import './assets/normalize.css'
// import 'ant-design-vue/dist/antd.css'

import { DatePicker, Button } from 'ant-design-vue'

const app = createApp(App)
app.use(DatePicker)
app.use(Button)

app.mount('#app')
