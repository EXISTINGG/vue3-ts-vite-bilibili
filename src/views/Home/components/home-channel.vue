<template>
<div  class="channel">
  <van-tabs v-model:active="active" title-active-color="#fb7299" color="#fb7299">
    <van-tab v-for="item in navList" :key="item.id" :title="item.text"></van-tab>
  </van-tabs>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import axios from 'axios'

interface INavItem {
  id: string
  text: string
}

let active = ref(0)
let navList = ref<INavItem []>([])
axios({
  url: '/navList',
  method: 'get'
}).then(res => {
  navList.value = res.data.result
  }).catch(err => {
  console.log(err.message)
})
</script>

<style lang="less">
  .channel {
    z-index: 999;
    position: sticky;
    top: 0
  }
</style>
