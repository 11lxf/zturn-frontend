/*
 * Copyright (c) 2024-2025. All rights reserved.
 */
import {createRouter, createWebHistory} from 'vue-router'
import HomePage from "@/pages/HomePage.vue";
import BlogPage from "@/pages/BlogPage.vue";
import NotePage from "@/pages/NotePage.vue";
import NoteDetailPage from '@/pages/NoteDetailPage.vue';
import AboutPage from "@/pages/AboutPage.vue";

// 1.配置路由规则
const routes = [
  {path: '/', component: HomePage},
  {path: '/home', redirect: '/'}, // 重定向
  {path: '/blog', component: BlogPage},
  {
    path: '/note', component: NotePage, name: 'note',
    children: [
      {path: 'detail/:id/:content?', component: NoteDetailPage, name: 'note-detail'},
    ]
  },
  {path: '/about', component: AboutPage},
]

// 2.创建路由实例
const router = createRouter({
  history: createWebHistory(), // 路由模式
  routes, // 实际上是routes: routes 的简写
})

export default router;
