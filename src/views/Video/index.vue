<template>
<!-- 头部 -->
<AppHeader />
<!-- 视频播放及信息 -->
<VideoPlayer :videoPlayer="videoInfo"/>
<!-- 推荐及评论 -->
<VideoBottom />
<!-- <router-link to="/">其他视频</router-link> -->
</template>

<script lang="ts" setup>
import axios from 'axios'
import {useRoute} from 'vue-router'
import {ref} from 'vue'
import AppHeader from "@/components/AppHeader.vue";
import VideoPlayer from "./components/video-player.vue";
import VideoBottom from './components/video-bottom.vue'

// 初始化对象类型,加上?,使用时就不用写一堆了
export interface IVideoInfo {
  author?: string
  authorIconSrc?: string
  commentCount?: number
  date?: string
  favCount?: string
  id?: string
  likeCount?: string
  playCount?: string
  poster?: string
  videoSrc?: string
  videoTitle?: string
}

// 获取路由对象
const route = useRoute()
const videoInfo = ref<IVideoInfo>({}) // 都是可选,写空对象即可

// 根据路由对象的ID获取对应的视频
axios({
  url: '/videoDetailList',
  method: 'get',
  params: {id: route.params.id}
}).then(({data}) => videoInfo.value = data.result)

// console.log('index: ', videoInfo);


</script>

<style lang="less">
html {
  padding: 0 10px;
}
</style>
