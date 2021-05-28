<template>
  <div>
    <nav-bar>
      <div slot="left"  @click="backClick">《</div>
      <div slot="center" class="title">
        <div class="item-title" 
        v-for="(item,index) in titles" 
        :key="index"
        :class="{active: index === currentIndex}"
        @click="titleClick(index)"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  components: { NavBar },
  data() {
    return {
      titles:['商品','参数','评论','详情'],
      currentIndex:0,
    }
  },
  methods: {
    titleClick(index){
      this.currentIndex = index
      this.$emit('titleClick', index)
    },
    backClick(){
      this.$router.back()
    }
  },
}
</script>

<style scoped>
.title{
  display: flex;
  font-size: 13px;
}
.item-title{
  flex: 1;

}
.active{
  color: indianred;
}
</style>