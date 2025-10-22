// 核心
import { createApp } from 'vue'
import App from './App.vue'

// 狀態管理
import { createPinia } from 'pinia'

// 路由
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faHouse, faBreadSlice, faStroopwafel, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
library.add(faHouse, faBreadSlice, faStroopwafel, faCartShopping, faMagnifyingGlass)

// css
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './assets/main.css'


// 建立實例
const app = createApp(App)
const pinia = createPinia()

// 安裝插件
app.use(pinia).use(router)

app.component('font-awesome-icon', FontAwesomeIcon)

// 掛載App
app.mount('#app')