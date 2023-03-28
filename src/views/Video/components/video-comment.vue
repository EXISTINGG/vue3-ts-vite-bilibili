<template>
  <div class="commnet-area" v-for="item in commentsList" :key="item.id">
    <div class="left-avatar">
      <img
        :src="item.avatar ? item.avatar : '../../../assets/images/user.jpg'"
      />
    </div>
    <div class="right-user">
      <div class="user-info">
        <span class="name">{{ item.username }}</span>
        <span class="date">{{ item.date }}</span>
      </div>
      <div class="comtent">
        <van-text-ellipsis
          rows="3"
          :content="item.content"
          expand-text="展开"
          collapse-text="收起"
        />
      </div>
      <div class="like">
        <span><van-icon name="good-job-o" /> {{ randomNum }}</span>
        <span><van-icon name="close" /></span>
        <span><van-icon name="share-o" /></span>
        <span><van-icon name="chat-o" /></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { ref } from 'vue'

interface ICommentsList {
  id: string
  avatar: string
  username: string
  content: string
  date: string
}

let commentsList = ref<ICommentsList[]>([])
const randomNum = Math.floor(Math.random() * 1000) + 1

axios({
  url: '/commentsList',
  method: 'get'
}).then((res) => (commentsList.value = res.data.result.items))

console.log(commentsList)
</script>

<style lang="less">
.commnet-area {
  display: flex;
  padding: 10px 0;
  border-bottom: 0.1px #ccc solid;

  .left-avatar {
    width: 50px;
    img {
      border-radius: 50%;
      height: 30px;
      width: 30px;
    }
  }

  .right-user {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    // margin-left: 10px;

    .user-info {
      display: flex;
      flex-direction: column;

      .name {
        font-size: 14px;
      }

      .date {
        font-size: 12px;
        font-weight: 300;
      }
    }

    .comtent {
      // flex: 1;
      padding: 10px 0;
      font-size: 15px;
    }

    .like {
      display: flex;
      width: 130px;
      justify-content: space-between;
    }
  }
}
</style>
