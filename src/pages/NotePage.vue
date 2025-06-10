<!--
  - Copyright (c) 2024-2025. All rights reserved.
  -->

<script setup lang="ts">

</script>

<template>
  <ul>
    <li>
      <RouterLink :to="{ name: 'note-detail', params: { id: 1, content: 'content1' } }">Note Page1</RouterLink>
    </li>
    <li>
      <RouterLink :to="{ name: 'note-detail', params: { id: 2 } }">Note Page1</RouterLink>
    </li>
    <li>Note Page3</li>
  </ul>
  <div class="sub-content">
    <RouterView/>
  </div>
</template>

<style scoped>
  .sub-content {
    background-color: yellow;
    height: 80%;
  }
</style>
