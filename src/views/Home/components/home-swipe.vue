<template>
<!-- bilibil设有防盗链,添加 <meta name="referrer" content="no-referrer"> 即可-->
<meta name="referrer" content="no-referrer">
  <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white" lazy-render>
    <van-swipe-item v-for="item in swipes" :key="item.imgSrc">
     <img :src="item.imgSrc" class="swipe-img"/>
     </van-swipe-item>
  </van-swipe>
</template>

<script lang="ts" setup>
import axios from 'axios'
import {ref} from 'vue'

interface ISwipe {
  imgSrc: string
  link: string | null
}

const swipes = ref<ISwipe []>([])

axios({
  url: '/swiperList',
  method: 'get'
}).then(res => swipes.value = res.data.result)

</script>

<style lang="less">
:root {
  padding: 5px;
}
    .my-swipe .van-swipe-item {
      height: 150px;
    .swipe-img {
      height: 100%;
    }
  }
</style>
