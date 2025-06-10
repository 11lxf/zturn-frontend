<!--
  - Copyright (c) 2024-2025. All rights reserved.
  -->

<template>
  <div>
    <h2>APP信息</h2>
    <p>APP名称:<input v-model="appInfo.appName"/>{{ appInfo.appName }}</p>
    <p>APP描述:<input v-model="appInfo.appDesc"/>{{ appInfo.appDesc }}</p>
    <p>父组件传来的数据APP名称:<input v-model="fatherAppInfo.appName"/>{{ fatherAppInfo.appName }}
    </p>
    <p>父组件传来的数据APP描述:<input v-model="fatherAppInfo.appDesc"/>{{ fatherAppInfo.appDesc }}
    </p>
  </div>
</template>

<script setup lang="ts">
  import {reactive} from "vue";
  // 引入类型定义，避免子组件不知道fatherAppInfo对象的属性类型而导致的报错
  import type {FatherAppInfo} from "@/types/FatherAppInfo";

  let appInfo = reactive({
    appName: 'zturn',
    appDesc: 'this is a vue app'
  })

  // 向父组件暴露数据
  defineExpose({appInfo})

  // 接收父组件传来的数据，名字:类型(跟JAVA的实例名:对象名类似)
  defineProps<{ fatherAppInfo: FatherAppInfo }>()
</script>

<style scoped>

</style>
