/*
 * Copyright (c) 2024-2025. All rights reserved.
 */
import {ref} from "vue";

export default function () {
  const clickCount = ref(0)

  function addClickCount() {
    clickCount.value += 1
  }

  return {
    clickCount,
    addClickCount
  }
}
