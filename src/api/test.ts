/*
 * Copyright (c) 2024-2025. All rights reserved.
 */

import myAxios from "@/utils/request.ts";

export async function healthCheck() {
  return myAxios<string>('/api/v1/test/healthcheck', {
    method: 'GET'
  });
}
