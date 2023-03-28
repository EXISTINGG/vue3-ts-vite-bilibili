<template>
  <video
    class="v-player"
    :src="videoPlayer.videoSrc"
    :poster="videoPlayer.poster"
    controls
    preload="auto"
  ></video>
  <div class="v-info-area">
    <div class="v-title">
      <van-text-ellipsis
        :content="videoPlayer.videoTitle"
        expand-text="展开"
        collapse-text="收起"
      />
    </div>
    <div class="info-item">
      <div class="author-info">
        <img :src="videoPlayer.authorIconSrc" class="avator" />
        <text class="avator-name">{{ videoPlayer.author }}</text>
      </div>
      <div class="v-info">
        <span class="playCount">{{ videoPlayer.playCount }}</span>
        <span class="likeCount"
          ><van-icon name="like" size="18"/> {{ videoPlayer.likeCount }}</span
        >
        <span class="favoriteCount"
          ><van-icon name="star" size="18"/> {{ videoPlayer.favCount }}</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { IVideoInfo } from '../index.vue'

const props = defineProps({
  videoPlayer: {
    type: Object as PropType<IVideoInfo>,
    required: true
  }
})
// console.log('videoInfo: ', props.videoPlayer)
</script>

<style lang="less">
.v-player {
  width: 100%;
}
.v-info-area {
  // box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  padding: 5px;
  width: 100%;
  height: 6rem;
  // background: pink;

  .info-item {
    display: flex;
    justify-content: space-between;
    // align-items: center;
    height: 30px;
    line-height: 30px;
  // background: orange;

    .author-info {
      .avator {
        border-radius: 50%;
        height: 25px;
        width: 25px;
      }

      .avator-name {
        font-size: 14px;
        margin-left: 3px;
      }
    }

    .v-info {
      display: flex;
      flex: 0.7;
      justify-content: space-evenly;
      font-size: 12px;
      color: #9499a0;
    }
  }
}
</style>
