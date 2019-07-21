<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-swiper2></home-swiper2>
    <home-swiper3></home-swiper3>
    <home-nav></home-nav>
    <div class="content">
      <home-recommend></home-recommend>
      <home-advert></home-advert>
      <test style="width:120%"></test>
      <home-internet></home-internet>
      <home-entertainment></home-entertainment>
      <home-movie></home-movie>
    </div>
    <div>
      <p @click="handleChange">改变</p>
      <router-link to="/page">点我有惊喜</router-link>
    </div>
  </div>
</template>

<script>
import HomeSwiper from './components/swiper'
import HomeSwiper2 from './components/swiper2'
import HomeSwiper3 from './components/swiper3'
import HomeHeader from './components/header'
import HomeNav from './components/nav'
import HomeRecommend from './components/recommend'
import HomeAdvert from './components/advert'
import Test from './components/advert/advert-part'
import HomeInternet from './components/Internet-movie'
import HomeEntertainment from './components/entertainment'
import {mapMutations} from 'vuex'
import HomeMovie from "./components/movie-model";

export default {
  name: 'Home',
  components: {
    HomeMovie,
    HomeSwiper,
    HomeSwiper2,
    HomeSwiper3,
    HomeHeader,
    HomeNav,
    HomeRecommend,
    HomeAdvert,
    HomeInternet,
    HomeEntertainment,
    Test,
  },
  methods:{
    handleChange (e){
      this.change(e.target.innerText)
    },
    ...mapMutations(['change'])
  }
}
</script>

<style lang="stylus" scoped>
  .content
    width: 1285px
    margin:0 auto
</style>
