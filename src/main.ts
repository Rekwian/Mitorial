import { createApp } from 'vue'
import '~/css/normalize.css'
import '~/css/style.scss'
// import '@/style.css'
import App from '@/App.vue'
import mitorial from '@/plugins/mitorial'
import router from '@/plugins/router'

createApp(App).use(mitorial).use(router).mount('#app')

