import  Vue  from  'vue'
import  Vuex   from  'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

import category from './modules/catergory'
import home from './modules/home'
import things from './modules/things'


Vue.use(Vuex)

export default new  Vuex.Store({
    actions,
    getters,
    mutations,
    modules:{
      category,
      home,
      things
    }
})
