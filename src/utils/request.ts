/*
 * Copyright (c) 2024-2025. All rights reserved.
 */

import axios from "axios";
import {ElMessage} from "element-plus";

// 创建 Axios 实例
const myAxios = axios.create({
  // 不配置baseURL，则默认使用当前页面的host:port
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
  // Axios跨域请求是否携带cookie，默认是false不携带
  withCredentials: true,
});

// 全局请求拦截器
myAxios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  },
)

// 全局响应拦截器
myAxios.interceptors.response.use(
  function (response) {
    const {data} = response
    console.log(data)
    // 未登录
    if (data.code === 401) {
      // 不是获取用户信息的请求，并且用户目前不是已经在用户登录页面，则跳转到登录页面
      if (
        !response.request.responseURL.includes('user/get/login') &&
        !window.location.pathname.includes('/user/login')
      ) {
        ElMessage.warning('请先登录')
        window.location.href = `/user/login?redirect=${window.location.href}`
      }
    }
    return data
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  },
)

export default myAxios;
