<template>
  <div class="body" ref="header" :style="opacityStyle">
    <div class="header">
      <div class="header-left"><img class="left-img" src="https://www.iqiyipic.com/common/fix/site-v4/sprite-headLogo-index.png" /> </div>
      <div class="header-center">
        <div class="center-input">
          <input class="input-style" >
        </div>
        <div class="center-hot"><span class="iconfont">&#xe9bd;</span><i class="hot-msg iconfont">热搜榜</i></div>
        <div class="center-search"><span class="iconfont">&#xe605;</span>搜全网</div>
      </div>
      <div class="header-right">
        <div class="right-item">
          <span class="icon iconfont">&#xe602;</span>
        </div>
        <div class="right-item">
          <span class="icon iconfont">&#xe6c4;</span>
        </div>
        <div class="right-item">
          <span class="icon iconfont">&#xe609;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data() {
    return{
      opacityStyle: {
        opacity: 1,
        position: 'static'
      }
    }
  },
  methods:{
    // 当网页下滑距离到达一定位置之后，改变header的显示模式，使其始终出现在网页顶部，
    handleScroll() {
      const scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if ( scroll>600) {
        let opacity = scroll / 700
        opacity = opacity > 1 ?1 : 0
        this.opacityStyle = { opacity ,position:'static'}
        if (scroll>700){
          this.opacityStyle = { opacity ,position:'fixed',top:0}
        }
      } else{
        this.opacityStyle = { opacity:1 ,position:'static',top:0}
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  .body
    width:100%
    background: #232325
    transition: all 2s linear
    .header
      position: relative
      width:1285px
      height:70px
      margin:0 auto
      line-height:70px
      overflow: hidden
      &:before
        content:''
        display:table
        clear:both
      &:after
        content:''
        height:0
        display:table
        clear:both
      .header-left
        float:left
        width:105px
        .left-img
          width:100%
      .header-center
        position:absolute
        top:14px
        left: 50%
        margin-left:-230px
        width:460px
        height:42px
        line-height: 42px
        background:#333
        -webkit-border-radius: 21px
        -moz-border-radius: 21px
        border-radius: 21px
        overflow: hidden
        .center-input
          float:left
          width: 274px
          .input-style
            text-indent :17px
            background:#333
            color:#999
            font-size :17px
        .center-hot
          float:left
          color:#666
          .hot-msg
            padding:0 5
        .center-search
          position:absolute
          right:0
          top:0
          width:96px
          height:70px
          text-indent: 5px
          color:#fff
          font-size :16px
          background: #00be06
          span
            padding:0 5px
      .header-right
        float:right
        height:70px
        color:#999
        &:after
          content:''
          height:0
          display:block
          clear:both
        .right-item
          float:left
          margin-left:15px
          .icon
            font-size :24px
</style>
