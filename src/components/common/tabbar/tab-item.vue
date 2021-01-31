<template>
    <div class="tab-bar-item" @click="itemclick()">
      <div v-if="!isActive"><slot  name="item-icon"></slot></div>
      <div v-else :class="{active:isActive}"><slot  name="item-active"></slot></div>
      <div :class="{active:isActive}">
      <slot name="item-text"></slot>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      //isActive:true,
    }
  },
  props:{
    path: String
  },
  methods: {
    itemclick(){
      this.$router.replace(this.path).catch(err =>{console.log(err);})
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    }
  }
};
</script>

<style>


.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 12px;
}
.fa{
  font-size: 24px;
  /* vertical-align: middle; */
}
.active{
  color: hotpink;
}
</style>