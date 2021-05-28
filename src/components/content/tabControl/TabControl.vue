<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" 
    :key="index" 
    class="tab-control-item" 
    :class="{cactive: index===currentIndex}"
    @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    titles:{
      type:Array,
      default(){
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex:0
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex =index;
      this.$emit('tabClick',index);
    }
  },  
}
</script>

<style>
.tab-control{
  display: flex;
  text-align: center;
  font-size: 14px;
  background-color: #fff;
}
.tab-control-item{
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.cactive span{
  color: #fb7299;
  border-bottom: 3px solid #fb7299;
}
</style>