<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-nav></home-nav>
    <div class="content">
      <home-recommend></home-recommend>
      <home-advert></home-advert>
      <test style="width:120%"></test>
      <home-internet></home-internet>
      <home-entertainment></home-entertainment>
    </div>
    <div>
      <p @click="handleChange">点我</p>
      <router-link to="/page">点我有惊喜</router-link>
    </div>
  </div>
</template>

<script>
import HomeSwiper from './components/swiper'
import HomeHeader from './components/header'
import HomeNav from './components/nav'
import HomeRecommend from './components/recommend'
import HomeAdvert from './components/advert'
import Test from './components/advert/advert-part'
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
  },
  methods:{
    handleChange (e){
      this.$store.dispatch('change',e.target.innerText)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    width: 1285px
    margin:0 auto
    overflow: hidden
</style>
