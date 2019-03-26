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
        <li><span class="title">青春斗</span><span class="hidden"> : </span><span class="content">郑爽为室友脱单操碎心</span></li>
        <li><span class="title">青春斗</span><span class="hidden"> : </span><span class="content">郑爽为室友脱单操碎心</span></li>
        <li><span class="title">青春斗</span><span class="hidden"> : </span><span class="content">郑爽为室友脱单操碎心</span></li>
        <li><span class="title">青春斗</span><span class="hidden"> : </span><span class="content">郑爽为室友脱单操碎心</span></li>
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
      var length=this.$refs.ul.children.length
      var ul=this.$refs.ul
      var msg=this.$refs.msg.children
      var swiper= this.$refs.swiper
      ul.style.width=length*100+"%" // 为整个ul加上宽度
      var Arr=ul.children
      var timer=setInterval(autoPlay,2000) // 开始循环
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
          msg[key].className="handleSelected"
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
          msg[key].className="handleSelected"
        } else{
          ul.style.left = -key*100+"%"
          for (let i=0 ;i<=length-1;i++){
            msg[i].className=''
          }
          msg[key].className="handleSelected"
        }
      }
      // 当鼠标移动到轮播区域时，停止轮播，移开后继续轮播，这里用onmouseenter替代onmouseover因为，onmouseenter不支持冒泡
      swiper.onmouseenter = function () {
        clearInterval(timer)
      }
      swiper.onmouseleave = function () {
        timer=setInterval(autoPlay,2000)
      }
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
      right:120.6px
      width:300px
      height:520px
      background: rgba(0,0,0,.7)
      ul
        .thisOne
          color:red
        li
          height:10%
          margin:10px
          font-size :18px
          font-weight :200
          color:#fff
          text-indent :20px
      .handleSelected
        text-indent :20px
        .title
          display:block
          font-size :26px
          font-weight :400
          color:#00be06
        .hidden
          display:none
        .content
          display:block
          color:#00be06
</style>
