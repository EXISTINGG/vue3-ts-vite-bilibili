<template>
  <div class="v-list">
    <AppVideoItem class="v-card" v-for="item in videoItem" :key="item.id" :video="item" />
  </div>
</template>

<script lang="ts" setup>
  import {ref} from 'vue'
  import axios from 'axios'
  import AppVideoItem from '@/components/AppVideoItem.vue'

  // 导出接口(视频组件需要用到)
  export interface IVideoItem {
    commentCount: string
    desc: string
    id: string
    imgSrc: string
    link: string | null
    playCount: string
    videoSrc: string
  }

  const videoItem = ref<IVideoItem []>([])

  axios({
    url: '/videosList',
    method: 'get'
  }).then(res => videoItem.value = res.data.result)
  
</script>

<style lang="less">
  .v-list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 2vw 0;

    .v-card {
      width: 49%;
    }
	   
  }
</style>