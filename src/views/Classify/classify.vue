<template>
  <div class="wrapper">
    <div class="content"></div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll:null
    }
  },
  created() {
    
  },
  mounted() {
    this.scroll = new BScroll('.wrapper',{
      probeType:3
    })
    this.scroll.on('scroll',(position)=>{
      
    })
  },
};
</script>

<style>
</style>