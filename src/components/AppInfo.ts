/*
 * Copyright (c) 2024-2025. All rights reserved.
 */
import {ref} from "vue";

export default function () {
  const appInfo = ref({
    appName: 'zturn',
    appDesc: 'this is a vue app'
  })

  return {
    appInfo
  }
}
