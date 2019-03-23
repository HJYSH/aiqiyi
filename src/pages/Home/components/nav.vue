<template>
  <div class="body">
    <div class="nav">
      <div class="nav-list">
        <div class="list" :class="{item : isThis}">
          <div class="list-item">
            <div>娱乐</div>
            <div>娱乐</div>
          </div>
          <div class="list-item">
            <div>电影</div>
            <div>网络电影</div>
          </div>
          <div class="list-item">
            <div>电视剧</div>
            <div>片花</div>
          </div>
          <div class="list-item">
            <div>综艺</div>
            <div>脱口秀</div>
          </div>
        </div>
        <div class="list">
          <div class="list-item">
            <div>动漫</div>
            <div>游戏</div>
          </div>
          <div class="list-item">
            <div>搞笑</div>
            <div>旅游</div>
          </div>
          <div class="list-item">
            <div>音乐</div>
            <div>时尚</div>
          </div>
          <div class="list-item">
            <div>原创</div>
            <div>体育</div>
          </div>
        </div>
        <div class="list">
          <div class="list-item">
            <div>财经</div>
            <div>科技</div>
          </div>
          <div class="list-item">
            <div>知识</div>
            <div>教育</div>
          </div>
          <div class="list-item">
            <div>儿童</div>
            <div>母婴</div>
          </div>
          <div class="list-item">
            <div>生活</div>
            <div>健康</div>
          </div>
          <div class="list-item">
            <div>军事</div>
            <div>汽车</div>
          </div>
          <div class="list-item">
            <div>公益</div>
            <div>纪录片</div>
          </div>
          <div class="list-item">
            <div>文学</div>
            <div>漫画</div>
          </div>
        </div>
        <div class="list">
          <div class="list-item">
            <div>热点</div>
            <div>风云榜</div>
          </div>
          <div class="list-item">
            <div>全网影视</div>
            <div>应用商店</div>
          </div>
          <div class="list-item">
            <div>奇秀直播</div>
            <div>直播中心</div>
          </div>
          <div class="list-item">
            <div>商城</div>
            <div>VR</div>
          </div>
          <div class="list-item">
            <div>大头</div>
            <div>爱艺奇号</div>
          </div>
          <div class="list-item">
            <div>泡泡广场</div>
            <div>游戏中心</div>
          </div>
        </div>
        <div class="list-last">
          <div class="list-item">
            <div class="iconfont">&#xe602;</div>
            <div><p>会员精选</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeNav',
  data () {
    return {
      isThis: true
    }
  }
}
</script>

<style lang="stylus" scoped>
  .body
    background:#232325
    .nav
      width: 1285px
      margin:0 auto
      .nav-list
        padding:20px 0 20px 0
        font-size: 0;
        white-space: nowrap
        color:#ccc
        margin-bottom:30px
        .list
          display:inline-block
          padding-left:23px
          padding-right:13px
          font-size :0
          background: url(//www.iqiyipic.com/common/fix/site-v4/nav-item-1336Bg-180425.png) no-repeat 100% 0
          .list-item
            display:inline-block
            font-size :14px
            margin-right:11px
            div
              line-height :30px
        .list-last
          display:inline-block
          padding-left:23px
          padding-right:13px
          .list-item
            display:inline-block
            padding-right:10px
        .item
          padding-left:0
</style>
