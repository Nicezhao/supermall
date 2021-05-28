<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <tabBar>
      
      <tab-item path="/home">
        <i slot="item-icon" class="fa fa-home"></i>
        <i slot="item-active" class="fa fa-home"></i>
        <div slot="item-text">首页</div>
      </tab-item>
      <tab-item path="/classify">
        <i slot="item-icon" class="fa fa-home"></i>
        <i slot="item-active" class="fa fa-home"></i>
        <div slot="item-text">分类</div>
      </tab-item>
      <tab-item path="/cart">
        <i slot="item-icon" class="fa fa-shopping-cart"></i>
        <i slot="item-active" class="fa fa-shopping-cart"></i>
        <div slot="item-text">购物车</div>
      </tab-item>
      <tab-item path="/profile">
        <i slot="item-icon" class="fa fa-android"></i>
        <i slot="item-active" class="fa fa-android"></i>
        <div slot="item-text">我的</div>
      </tab-item>
    </tabBar>
    
  </div>
</template>

<script>
 import tabBar from 'components/common/tabbar/Tab-bar'
 import tabItem from 'components/common/tabbar/tab-item'
export default {
  name:'MainTabBar',
  components:{
    tabBar,
    tabItem
  }
}
</script>

