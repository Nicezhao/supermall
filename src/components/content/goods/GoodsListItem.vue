<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImage" alt="" @load="imageLoad" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imageLoad(){
      if(this.$route.path.indexOf('/home')){
        this.$bus.$emit('itemImageLoad')
      }else if (this.$route.path.indexOf('/detail')) {
        
      }
    },
    itemClick(){
      this.$router.push('/detail/' +this.goodsItem.iid)
    }
  },
  computed:{
    showImage(){
      return this.goodsItem.image || this.goodsItem.show.img || this.goodsItem.img
    }
  }
};
</script>

<style>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
  /* padding:0 2px; */
  
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
</style>