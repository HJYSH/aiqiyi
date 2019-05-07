<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-nav></home-nav>
    <div class="content">
      <home-recommend></home-recommend>
      <home-advert></home-advert>
      <test></test>
      <home-internet></home-internet>
      <home-entertainment></home-entertainment>
    </div>
  </div>
</template>

<script>
import HomeSwiper from './components/swiper'
import HomeHeader from './components/header'
import HomeNav from './components/nav'
import HomeRecommend from './components/recommend'
import HomeAdvert from './components/advert'
import Test from './components/test'
import HomeInternet from './components/Internet-movie'
import HomeEntertainment from './components/entertainment'
export default {
  name: 'Home',
  components: {
    HomeSwiper,
    HomeHeader,
    HomeNav,
    HomeRecommend,
    HomeAdvert,
    HomeInternet,
    HomeEntertainment,
    Test
  }
}
</script>

<style lang="stylus" scoped>
  .content
    width: 1285px
    margin:0 auto
    overflow: hidden
</style>
