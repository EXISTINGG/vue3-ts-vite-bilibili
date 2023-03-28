<template>
<div class="v-list">
      <AppVideoItem class="v-card" v-for="item in recommendVideos" :key="item.id" :video="item"/>
</div>
</template>

<script lang="ts" setup>
import axios from 'axios'
import {ref} from 'vue'
import AppVideoItem from '@/components/AppVideoItem.vue'
import {IVideoItem} from '../../Home/components/home-video-list.vue'

const recommendVideos = ref<IVideoItem []>([])

axios({
  url: '/recommendList',
  method: 'get'
}).then(res => recommendVideos.value = res.data.result
)
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
