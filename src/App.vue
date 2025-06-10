<template>
  <div id="app">
    <h1>Hello World</h1>
    <br>
    <p>
      <!--路由链接-->
      <RouterLink to="/">首页</RouterLink> <!--字符串跳转-->
      <RouterLink replace :to="{ path: '/blog' }">博客</RouterLink> <!--对象跳转-->
      <RouterLink :to="{ name: 'note' }">技术笔记</RouterLink> <!--具名跳转-->
      <a href="/about">关于</a> <!--a标签跳转-->
    </p>
    <br>
    <div class="content">
      <!--路由输出-->
      <RouterView/>
    </div>
    <br>
    <div>
      <span>用户名：{{ userInfo.userName }}</span>
      <span>年龄：{{ userInfo.userAge }}</span>
    </div>
    <br>
    <div>
      <button @click="handleHealthCheck">健康检查</button>
      {{ httpRes }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import {userStore} from '@/store/user';
  import {storeToRefs} from "pinia";
  import {ref} from "vue";
  import {healthCheck} from "@/api/test.ts";

  const user = userStore();
  console.log(user.getUserName);
  console.log(user.getUserAge);
  user.changeUserName('lee')
  console.log(user.getUserName);

  const userInfo = storeToRefs(user) // 转为响应式数据

  const httpRes = ref();

  async function handleHealthCheck() {
    httpRes.value = await healthCheck();
  }
</script>

<style scoped>
  a {
    margin-right: 10px;
  }

  .content {
    background: whitesmoke;
    width: 1000px;
    height: 400px;
    border: 1cap;
    border-radius: 10px;
  }
</style>
