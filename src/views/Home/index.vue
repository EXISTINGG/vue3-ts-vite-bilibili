<template>
  <!-- 头部组件 -->
  <AppHeader />
  <!-- 标签组件 -->
  <HomeChannel />
  <!-- 轮播图 -->
  <HomeSwipe />

  <h1>Bilibili 主页</h1>
  <router-link to="/video/1">点我去视频详情页</router-link>
</template>

<script lang="ts" setup>
import AppHeader from '@/components/AppHeader.vue'
import HomeChannel from './components/home-channel.vue'
import HomeSwipe from './components/home-swipe.vue'


</script>
