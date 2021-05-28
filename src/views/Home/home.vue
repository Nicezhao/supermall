<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>

    <tab-control
      :titles="['流行', '新款', '热销']"
      class="tab-C"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isTabFixed"
    >
    </tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper
        :banners="banners"
        @swiperImageLoad="swiperImageLoad"
      ></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <tab-control
        :titles="['流行', '新款', '热销']"
        class="tabC"
        @tabClick="tabClick"
        ref="tabControl2"
      >
      </tab-control>

      <good-list :goods="showGoods" class="gd"></good-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";

import TabControl from "components/content/tabControl/TabControl";
import GoodList from "components/content/goods/GoodList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backtop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "common/utils";

export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    TabControl,
    GoodList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
    };
  },
  activated() {
    this.$refs.scroll.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y;
  },
  created() {
    //请求多个数据
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });
  },
  methods: {
    // 网络请求相关
    getHomeMultidata() {
      getHomeMultidata()
        .then((result) => {
          this.banners = result.data.banner.list;
          this.recommends = result.data.recommend.list;
        })
        .catch((err) => {});
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page)
        .then((result) => {
          this.goods[type].list.push(...result.data.list);
          this.goods[type].page += 1;
          this.$refs.scroll.scroll.finishPullup();
        })
        .catch((err) => {});
    },
    // 事件监听相关
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 3:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentType = index;
      this.$refs.tabControl2.currentType = index;
    },
    backClick() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;

      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.scroll.refresh();
    },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      console.log(this.tabOffsetTop);
    },
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: #fb7299;
  color: #fff;

  /* position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 999; */
}
/* .tabC {
  position: sticky;
  top: 44px;
} */
.tab-C {
  position: relative;
  z-index: 9;
}
.gd {
  width: 100%;
  overflow: hidden;
}
.content {
  height: calc(100vh - 93px);
  overflow: hidden;
  position: absolute;
  top: 44px;
}
</style>