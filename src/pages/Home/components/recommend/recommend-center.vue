<template>
  <div class="recommend-center">
    <div class="swiper"></div>
    <div class="center-list">
      <ul>
        <li class="list-item">
          <span class="iconfont">&#xe72f;</span>
          <span>习近平对江苏爆炸事故作出指示</span>
          <span class="news-center"></span>
          <span>德国成立"气候内阁"</span>
        </li>
        <li class="list-item">
          <span class="iconfont">&#xe72f;</span>
          <span>广州一法院女书记员遇害</span>
          <span class="news-center"></span>
          <span>伊拉克沉船事故已致93死</span>
        </li>
        <li class="list-item">
          <span class="iconfont">&#xe72f;</span>
          <span>史上最硬核小偷  专门趁工作日开会期间偷机关单位</span>
        </li>
        <li class="list-item">
          <span class="iconfont">&#xe72f;</span>
          <span>史上最硬核小偷  专门趁工作日开会期间偷机关单位</span>
        </li>
        <li class="list-item">
          <span class="iconfont">&#xe72f;</span>
          <span>史上最硬核小偷  专门趁工作日开会期间偷机关单位</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RecommendCenter'
  }
</script>

<style lang="stylus" scoped>
  .recommend-center
    position: relative
    vertical-align :top
    display:inline-block
    width:425px
    padding:5px
    font-size :14px
    margin-left:-5px
    overflow: hidden
    .swiper
      width: 100%
      height:287px
      background: #000
    .center-list
      font-size :14px
      .list-item
        line-height :34px
        .news-center
          display: inline-block
          width:1px
          background: #ccc
          margin:0 8px
          font-size:14px
          height:14px
</style>
