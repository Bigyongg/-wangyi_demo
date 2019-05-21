// 01. 引入 请求函数
import {reqMockCategory} from "../../api";

// 02.  定义数据类型  state
const state = {
  categoryData: []
}

// 03. 引入 mutations
import {GET_SEARCH_DATA} from '../mutation-type'


// 04.  定义 mutations
const mutations = {
  [GET_SEARCH_DATA] (state, {categoryData}) {
    state.categoryData = categoryData    // mutation直接操作状态
  }
}


// 05.  定义 actions
const actions = {
  async getCategoryData ({commit}) {
    const result = await reqMockCategory();    // 发送ajax
    const categoryData = result.data.categoryL1List

    if (result.code === 0) {
      commit(GET_SEARCH_DATA , {categoryData})    // 根据返回的数据调用 mutations 更改数据
    }
  }
}

// 06.  定义 getters (***)
const getters = {

}

// 07.  常规暴露 4 个 对象

export default {
  state,
  mutations,
  actions,
  getters
}
