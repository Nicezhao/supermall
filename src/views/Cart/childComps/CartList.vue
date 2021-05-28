<template>
  <div id="cart_list">
    <scroll ref="scroll" class="cart_scroll">
      <template>
        <cart-list-item
          v-for="(item, index) in cartlist"
          :key="index"
          :item-info="item"
          ref="item"
          @click="click"
        ></cart-list-item>
      </template>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import CartListItem from "./CarListItem";
import Scroll from "@/components/common/scroll/Scroll";
import CartBottomBar from './CartBottomBar.vue';
export default {
  name: "CartList",
  computed:{
    cartlist(){
      return this.$store.state.cartlist;
    }
  },
  components: {
    CartListItem,
    Scroll,
    CartBottomBar,
  },
  activated() {
    this.$refs.scroll.refresh()
  },
  methods: {
    click(){
      this.$router.push('/detail/' + this.$refs.item.iteminfo.iid)
    }
  }
}
</script>

<style scoped>
#cart_list {
  height: calc(100% - 44px - 49px - 40px);
}
/**
* scroll
*/
.cart_scroll {
  height: 100%;
  overflow: hidden;
}
</style>