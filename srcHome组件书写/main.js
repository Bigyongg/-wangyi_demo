/*入口js文件
* */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import './mockData/mockServer.js'
Vue.use(Vuex)
Vue.store = store



//new一个实例
new Vue({
  el:'#app',

  // components:{
  //   App
  // },
  // template:'<App/>'

  render: h => h(App),
  store,
  router



})
