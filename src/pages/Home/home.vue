<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-nav></home-nav>
    <div class="content">
      <home-recommend></home-recommend>
      <home-advert></home-advert>
    </div>
  </div>
</template>

<script>
import HomeSwiper from './components/swiper'
import HomeHeader from './components/header'
import HomeNav from './components/nav'
import HomeRecommend from './components/recommend'
import HomeAdvert from './components/advert'
export default {
  name: 'Home',
  components: {
    HomeSwiper,
    HomeHeader,
    HomeNav,
    HomeRecommend,
    HomeAdvert
  }
}
</script>

<style lang="stylus" scoped>
  .content
    width: 1285px
    height:488px
    margin:0 auto
</style>
