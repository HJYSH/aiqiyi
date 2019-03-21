<template>
  <div class="scroll" ref="swiper">
    <div class="box">
      <ul id="ul" ref="ul">
        <li><img src="//pic1.iqiyipic.com/common/lego/20190319/9654cd0b58854f43a040b883feab70cf.webp"/></li>
        <li><img src="//pic2.iqiyipic.com/common/lego/20190320/696960add9c442888f6a44191677cfe0.webp"  /></li>
        <li><img src="//pic1.iqiyipic.com/common/lego/20190319/5a2341e2f9e04cb3b5a3bf5577a46e15.jpg" /></li>
        <li><img src="//pic0.iqiyipic.com/common/lego/20190319/8bb1d5556b804534af532f6bd31f0fea.jpg"/></li>
      </ul>
    </div>
    <div class="desc">
      <ul ref="msg">
        <li>这是新的呼唤，这是爱的奉献</li>
        <li>这是新的呼唤，这是爱的奉献</li>
        <li>这是新的呼唤，这是爱的奉献</li>
        <li>这是新的呼唤，这是爱的奉献</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  methods: {
    auto () {
      var key = -1
      var square=0
      var length=this.length
      var ul=this.ul
      var msg=this.msg
      var swiper= this.swiper
      ul.style.width=length*100+"%" // 为整个ul加上宽度
      var Arr=ul.children
      // 为每个li加上合适的宽度
      for(let i=0 ;i<length;i++){
        Arr[i].style.width=(1/length)*100+"%"
      }
      ////鼠标移动到某个li上，相对ul的li显示
      for (let i=0;i<=length-1;i++) {
        msg[i].onmouseover=function() {
          key=i
          ul.style.left=-i*100+"%"
          for (let i=0 ;i<=length-1;i++){
            msg[i].className=''
          }
          msg[key].className="thisOne"
        }
      }
      function autoPlay() {
        key++
        if (key>length-1){
          ul.style.left = 0
          key =0
          for (let i=0 ;i<=length-1;i++){
            msg[i].className=''
          }
          msg[key].className="thisOne"
        } else{
          ul.style.left = -key*100+"%"
          for (let i=0 ;i<=length-1;i++){
            msg[i].className=''
          }
          msg[key].className="thisOne"
        }
      }
      var timer=setInterval(autoPlay,2000)
      swiper.onmouseover = function () {
        clearInterval(timer)
      }
      swiper.onmouseout = function () {
        timer=setInterval(autoPlay,2000)
      }
    },
    handleStop () {
      clearInterval(timer)
    }
  },
  computed: {
    length () {
      return this.$refs.ul.children.length
    },
    ul () {
      return this.$refs.ul
    },
    msg () {
      return this.$refs.msg.children
    },
    swiper () {
      return this.$refs.swiper
    }
  },
  mounted() {
    this.auto()
  }
}
</script>

<style lang="stylus" scoped>
  .scroll
    position: relative
    width:100%
    height:0
    padding-bottom: 30.58%
    overflow: hidden
    .box
      ul
        position: relative
        top:0
        li
          float:left
          img
            width:100%
    .desc
      position: absolute
      top:0
      right:0
      width:300px
      height:520px
      background: rgba(0,0,0,.7)
      ul
        .thisOne
          color:red
        li
          height:10%
          margin:10px
          background:green
          color:#fff
          &:hover
            font-size :20px
</style>
