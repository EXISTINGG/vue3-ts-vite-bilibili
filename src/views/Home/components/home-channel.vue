<template>
  <van-tabs v-model:active="active">
    <van-tab v-for="item in navList" :key="item.id" :title="item.text"></van-tab>
  </van-tabs>
</template>

<script lang="ts" setup>
import {ref, reactive} from 'vue'
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
  console.log(res.data.result)
  navList.value = res.data.result
  }).catch(err => {
  console.log(err.message)
})
</script>
