import { createApp } from 'vue'
import { createPinia } from 'pinia' // 1. 피니아 가져오기
import App from './App.vue'

const app = createApp(App)

app.use(createPinia()) // 2. 피니아 연결하기
app.mount('#app')