<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车（{{cartLength}}）</div>
    </nav-bar>

    <!-- 商品列表 -->
    <cart-list></cart-list>
    
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import CartList from './childComps/CartList.vue'
import Scroll from 'components/common/scroll/Scroll.vue'

export default {
  name:'cart',
  components:{
    NavBar,
    CartList,
    Scroll,

  },
  computed:{
    cartLength(){
      return this.$store.state.cartlist.length
    }
  }
}
</script>

<style scoped>
#cart{
  height: 100vh;
}
.nav-bar{
  background-color: #fb7299;
  color: #fff;
  font-weight: 700;
}
</style>