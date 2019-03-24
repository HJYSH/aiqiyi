<template>
  <div class="recommend-center">
    <div class="swiper" ref="swiper">
      <div ref="ul">
        <div>
          <img class="item-img" src="https://pic2.iqiyipic.com/lequ/20190324/4615fdcb4b49421a9d42fa63f0e5b4e2.jpg" />
          <div class="desc">1546</div>
        </div>
        <div>
          <img class="item-img" src="http://pic3.iqiyipic.com/lequ/20190323/d08a364df2174d069dabc57fafc3d6a5.jpg" />
          <div class="desc">45748</div>
        </div>
        <div>
          <img class="item-img" src="http://pic0.iqiyipic.com/lequ/20190322/9a6401a7f59446e684a93aea4bb16573.jpg" />
          <div class="desc">7911</div>
        </div>
      </div>
      <div class="pagination">
        <div class="pre-last iconfont" ref="pre">&#xe629;</div>
        <div class="number">
          <span ref="current">1</span>
          /
          <span>{{number}}</span>
        </div>
        <div class="pre-next iconfont" ref="next">&#xe6aa;</div>
      </div>
    </div>
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
  name: 'RecommendCenter',
  data () {
    return {
      number: null
    }
  },
  methods: {
    play () {
      var key = -1
      var child=this.$refs.ul.children
      var length=this.$refs.ul.children.length
      this.number =this.$refs.ul.children.length
      var swiper=this.$refs.swiper
      var current=this.$refs.current
      var pre=this.$refs.pre
      var next=this.$refs.next
      var timer = setInterval(autoPlay,2000)
      function autoPlay() {
        key++
        if(key>length-1){
          key=0
          for(let i=0;i<=length-1;i++){
            child[i].style.display = 'none'
          }
          current.innerText=key+1
          child[key].style.display = 'block'
        }else{
          for(let i=0;i<=length-1;i++){
            child[i].style.display = 'none'
          }
          current.innerText=key+1
          child[key].style.display = 'block'
        }
      }
      swiper.onmouseover = function () {
        clearInterval(timer)
      }
      swiper.onmouseout = function () {
        timer=setInterval(autoPlay,2000)
      }
      next.onclick = function () {
        autoPlay()
      }
      pre.onclick = function () {
        key--
        if(key<0){
          key=length-1
          for(let i=0;i<=length-1;i++){
            child[i].style.display = 'none'
          }
          current.innerText=key+1
          child[key].style.display = 'block'
        }else{
          for(let i=0;i<=length-1;i++){
            child[i].style.display = 'none'
          }
          current.innerText=key+1
          child[key].style.display = 'block'
        }
      }
    }
  },
  mounted() {
    this.play()
  }
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
      position: relative
      width: 100%
      height:287px
      overflow:hidden
      .item-img
        width:100%
        height: 100%
      .desc
        position:absolute
        left:0
        bottom:0
        width:100%
        height:60px
        background-color:rgba(0,0,0,.6)
        color:#fff
      .pagination
        position: absolute
        right:5px
        bottom:10px
        font-size:0
        width:60px
        z-index:10
        color:#fff
        .pre-last
          font-size :14px
          display:inline-block
          cursor:pointer
        .number
          display:inline-block
          font-size :14px
        .pre-next
          font-size :14px
          display:inline-block
          cursor pointer
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
