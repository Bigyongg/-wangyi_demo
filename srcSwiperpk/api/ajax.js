// 封装发送ajax模块

import axios from 'axios'

export default function ajax (url, data = {}, method = 'GET') {
  return new Promise(((resolve, reject) => {
    // 自定义promise对象
    let promise;
    if (method === 'GET') {    // 发送 GET 请求
      promise = axios.get(url, {params: data})    // 会将 data 内的属性以 query 参数的形式拼接
    }else if (method === 'POST') {    // 发送 POST 请求
      promise = axios.post(url, data)
    }
    promise
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject('----请求出错 :' + error.message)
      })
  }))
}
