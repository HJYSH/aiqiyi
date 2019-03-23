<template>
  <div>
    <div class="header">
      <span class="iconfont">&#xe603;</span>
      <span>今日焦点</span>
      <span class="more">更多&gt;</span>
    </div>
    <div class="content">
      <recommend-left></recommend-left>
      <recommend-center></recommend-center>
      <recommend-right></recommend-right>
    </div>
  </div>
</template>

<script>
  import RecommendLeft from './recommend/recommend-left'
  import RecommendCenter from './recommend/recommend-center'
  import RecommendRight from './recommend/recommend-right'
export default {
  name: 'HomeRecommend',
  components: {
    RecommendLeft,
    RecommendCenter,
    RecommendRight
  }
}
</script>

<style lang="stylus" scoped>
  .header
    font-size :24px
    font-weight :400
    line-height :24px
    .more
      font-size :14px
  .content
    font-size :0
    height:488px

</style>
