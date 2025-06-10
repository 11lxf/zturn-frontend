<!--
  - Copyright (c) 2024-2025. All rights reserved.
  -->

<template>
  <div>
    <h1>Note Detail Page {{ params.id }}</h1>
    <p>Note detail page content {{ params.content }}</p>
  </div>
</template>

<script setup lang="ts">
  import {useRoute} from "vue-router";
  import {toRef} from "vue";
  // useRoute()获取当前路由信息实例，useRouter()获取路由器实例，注意区分
  const route = useRoute();
  console.log(route.params);
  const params = toRef(route, "params")
</script>

<style scoped>

</style>
