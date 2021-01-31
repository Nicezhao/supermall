<template>
  <div id="app">
    <router-view/>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
import MainTabBar from 'components/content/maintabbar/mainTabBar'
export default {
  name:'app',
  components:{
    
    MainTabBar,
  }
}
</script>
<style>

</style>
