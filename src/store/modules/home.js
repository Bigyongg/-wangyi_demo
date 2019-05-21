// 01.从api引入 请求函数
import {reqMockHome} from "../../api";

// 02.定义数据类型  state
const state = {
   homeData: []
}

// 03.引入 mutations 名称 (mutation-type)   函数名常量名称
import  {GET_HOME_DATA} from '../mutation-type'


// 04.定义 mutations
const mutations = {  // 接收 数据进行更改 数据 ；
     [GET_HOME_DATA](state,{homeData}){
      state.homeData = homeData  // mutation直接操作状态
   }
}


// 05.定义 actions
 // 异步获取  发送 ajax  请求
const actions = {

   async GetHomedatas({commit}){
     const result  =  await reqMockHome()   // 发送ajax 请求
      const homeData = result.data

     if(result.code === 0){  // 根据返回的数据调用 mutations 更改数据
         commit(GET_HOME_DATA,{homeData})
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

