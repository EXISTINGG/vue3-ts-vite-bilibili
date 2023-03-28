<template>
  <van-tabs v-model:active="active" title-active-color="#fb7299" color="#fb7299">
    <van-tab title="推荐" name="recommend">
      <VideoRecommended />
    </van-tab>
    <van-tab title="评论" name="comment">
      <Video-Comment />
    </van-tab>
  </van-tabs>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import VideoRecommended from './video-recommended.vue'
import VideoComment from './video-comment.vue'

let active = ref('recommend')
</script>

<style lang="less"></style>
