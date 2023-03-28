<template>
  <router-link :to="'/video/'+ video.id">
    <div class="v-item">
      <div class="v-img">
        <img
          :src="video.imgSrc"
        />
        <div class="count-area">
          <div class="play-count"><van-icon name="video-o" /> {{video.playCount}}</div>
          <div class="danmu-count"><van-icon name="comment-o" class="danmu-icon"/> {{video.commentCount}}</div>
        </div>
      </div>
      <div class="v-desc">
        {{video.desc}}
      </div>
    </div>
  </router-link>
</template>

<script lang="ts" setup>
import { PropType, toRefs } from 'vue'
import {useRouter} from 'vue-router'
import {IVideoItem} from '../views/Home/components/home-video-list.vue'
import { useRoute } from 'vue-router'

// 父传子需要通过 defineProps 接收
// PropType 用于指定数据格式
const props = defineProps({
  video: {
    // Object 对象为 IVideoItem 接口格式
    type: Object as PropType<IVideoItem>,
    required: true
  }
})

const router = useRouter()

// function log() {console.log(props.video)
// }
</script>

<style lang="less">
    .v-item {
        width: 100%;
        margin-bottom: .7rem;
        
        .v-img{
            position: relative;
            width: 100%;
            // background: linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5));
            // box-shadow:inset 0 2px 50px rgba(0, 0, 0, 1);

            .count-area {
                display: flex;
                justify-content: space-between;
                align-items: center;
                position: absolute;
                padding: 0 1vw;
                bottom: 0;
                width: 100%;
                color: white;
                height: 20px;
                line-height: 20px;
                font-size: 12px;
                font-weight: 500;
                // box-shadow: inset 0 0 50px 1px rgba(0, 0, 0, .5);  
                 background: linear-gradient(rgba(192,192,192,.3),rgba(0,0,0,.6));

                 .danmu-count {
                     // 弹幕图标有点对不齐
                     .danmu-icon {
                         bottom: -.5px;
                     }
                 }
            }
        }

        .v-desc {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-top: 5px;
            height: 30px;
            color: #18191C;
            font-size: 12px;
            font-weight: 500;
        }
    }
</style>
