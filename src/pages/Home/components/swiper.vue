<template>
  <div class="scroll" ref="swiper">
    <div class="box">
      <ul id="ul" ref="ul">
        <li v-for="item of list" :key="item.id"><img :src="item.imgSrc"/></li>
      </ul>
    </div>
    <div class="desc">
      <ul ref="msg">
        <li v-for="item of list" :key="item.id"><span class="title">{{item.title}}</span><span class="hidden"> : </span><span class="content">{{item.desc}}</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data(){
    return{
      list:[
        {
          id:'001',
          imgSrc:'//pic1.iqiyipic.com/common/lego/20190319/9654cd0b58854f43a040b883feab70cf.webp',
          title:'青春斗',
          desc:'郑爽为室友脱单操碎心'
        },
        {
          id:'002',
          imgSrc:'//pic2.iqiyipic.com/common/lego/20190320/696960add9c442888f6a44191677cfe0.webp',
          title:'都挺好',
          desc:'希望我们都挺好的'
        },
        {
          id:'003',
          imgSrc:'//pic1.iqiyipic.com/common/lego/20190319/5a2341e2f9e04cb3b5a3bf5577a46e15.jpg',
          title:'大宋北斗师',
          desc:'俊男靓女的宋朝史诗'
        },
        {
          id:'004',
          imgSrc:'//pic0.iqiyipic.com/common/lego/20190319/8bb1d5556b804534af532f6bd31f0fea.jpg',
          title:'扶摇',
          desc:'最终的结局最美的邂逅'
        }
      ]
    }
  },
  methods: {
    auto () {
      var key = -1
      var length=this.$refs.ul.children.length
      var t=length-1
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
      for (let i=0;i<=t;i++) {
        msg[i].onmouseenter=function() {
          key=i
          ul.style.left=-i*100+"%"
          for (let i=0 ;i<=t;i++){
            msg[i].className=''
          }
          msg[key].className="handleSelected"
        }
      }
      function autoPlay() {
        key++
        if (key>t){
          ul.style.left = 0
          key =0
          for (let i=0 ;i<=t;i++){
            msg[i].className=''
          }
          msg[key].className="handleSelected"
        } else{
          ul.style.left = -key*100+"%"
          for (let i=0 ;i<=t;i++){
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
          -webkit-box-sizing: border-box
          -moz-box-sizing: border-box
          box-sizing: border-box
          width:100%
          margin:15px
          overflow: hidden
          font-size :16px
          font-weight :200
          color:#fff
      .handleSelected
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
