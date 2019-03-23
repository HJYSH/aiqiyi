<template>
  <div class="recommend-left">
    <div>
      <h3 class="top-header"><i><em class="news">NEWS</em></i><span class="iconfont">&#xe7f4;</span>湖南常长高速客车突然起火 已致26死</h3>
      <div class="left-list">
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
        </ul>
      </div>
    </div>
    <div>
      <h3 class="top-header"><i><em class="news">NEWS</em></i><span class="iconfont">&#xe7f4;</span>湖南常长高速客车突然起火 已致26死</h3>
      <div class="left-list">
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
        </ul>
      </div>
    </div>
    <div class="left-bottom">
      <div class="bottom-item">
        <div class="item-img">
          <div class="item-img">
            <img class="img" src="https://pic3.iqiyipic.com/lequ/20190323/7a84d443d26341408bbfeb585b00a9b8.jpg">
          </div>
        </div>
        <p class="desc">广西建筑撞脸美国国会</p>
      </div>
      <div class="bottom-item">
        <div class="item-img">
          <img class="img" src="https://pic1.iqiyipic.com/lequ/20190323/7c5ec4609f32463791c6cc07418e22cd.jpg">
        </div>
        <p class="desc">广西建筑撞脸美国国会</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendLeft',
  components: {
  }
}
</script>

<style lang="stylus" scoped>
  .recommend-left
    display:inline-block
    width:425px
    padding:5px
    margin-left:-5px
    .top-header
      font-size :20px
      line-height :40px
      font-weight :400
      padding-top:8px
      &:hover
        color:#00be06
      .news
        font-size :14px
        font-style :italic
        color:#00be06
        padding-right:5px
    .left-list
      font-size :14px
      padding-bottom:8px
      .list-item
        line-height :34px
        .news-center
          display: inline-block
          width:1px
          background: #ccc
          margin:0 8px
          font-size:14px
          height:14px
    .left-bottom
      font-size :0
      width:430px
      .bottom-item
        display:inline-block
        width: 210px
        margin-right:5px
        box-sizing :border-box
        .item-img
          width: 100%
          height:0
          padding-bottom:56.1%
          overflow:hidden
          .img
            width: 100%
            &:hover
              position: relative
              left: -5%
              top:-5%
              width:110%
        .desc
          background: #F8F8F8
          font-size :14px
          text-align:center
          line-height :36px
</style>
