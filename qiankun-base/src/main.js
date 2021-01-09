import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

import { registerMicroApps, start } from 'qiankun';
registerMicroApps([
  {
    name: 'vueApp', // 应用的名字
    entry: '//localhost:8021',// 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
    container: '#vue', // 容器名
    activeRule: '/vue',// 激活的路径
  },
  {
    name: 'reactApp',
    entry: '//localhost:8020',
    container: '#react',
    activeRule: '/react',
  },
]);
start();