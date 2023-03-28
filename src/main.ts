import { createApp, useAttrs } from 'vue'
import App from './App.vue'
import router from './router/index'
import './mock/index'

// 导入样式
import './assets/styles/base.less'
import './assets/styles/iconfont.less'
// 引入vant组件
import { Tab, Tabs, Swipe, SwipeItem } from 'vant';
const app = createApp(App)

// 挂载组件,路由
app
.use(Tabs)
.use(Tab)
.use(Swipe)
.use(SwipeItem)
.use(router)
.mount('#app')
