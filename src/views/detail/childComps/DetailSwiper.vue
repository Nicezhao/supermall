<template>
  
    <swiper class="swiperA">
      <swiper-item v-for="(item, index) in topImages" :key="index" >
        <img :src="item" alt="" >
      </swiper-item>
    </swiper>
  
</template>

<script>
import Swiper from 'components/common/swiper/Swiper'
import SwiperItem from 'components/common/swiper/SwiperItem'
export default {
  name:'DetailSwiper',
  components: { Swiper, SwiperItem },
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .swiperA{
    height: 300px;
    overflow: hidden;
  }
  .swiperA img{
    
  }
</style>