<template>
  <div class="swiper"
       @mouseenter="handleStop"
       @mouseleave="handleAuto"
  >
    <!--轮播图-->
    <div class="box" ref="box">
      <ul id="ul" ref="ul">
        <li
          v-for="item of list"
          :key="item.id"
          :ref="item.index"
        >
          <img :src="item.imgSrc"/>
        </li>
      </ul>
    </div>
    <!--分页-->
    <div class="pagination">
      <div
        class="pagination-item"
        v-for="(item, index) of list"
        :key="item.index"
        :class="{pink:index===number||index===key}"
        v-if="index!==length"
      >
        {{index+1}}
      </div>
    </div>
    <div class="desc">
      <ul ref="msg">
        <li
          v-for="(item, index) of list"
          :key="item.id"
          @mouseenter="handleChange(index)"
          :class="{handleSelected: index===number||index===key}"
          v-if="index!==length"
        >
          <span class="title">{{item.title}}</span>
          <span class="hidden"> : </span>
          <span class="content">{{item.desc}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper3',
    data(){
      return{
        number:0, // 轮播图显示与否的依赖对象
        timer:'', // 定义循环
        timer2:'', // 平移循环
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
          },
          {
            id:'005',
            imgSrc:'//pic1.iqiyipic.com/common/lego/20190319/9654cd0b58854f43a040b883feab70cf.webp',
            title:'青春斗',
            desc:'郑爽为室友脱单操碎心'
          }
        ]
      }
    },
    methods: {
      // 轮播依赖方法
      autoPlay () {
        this.$refs.ul.style.width= (this.length+1)*this.$refs.box.offsetWidth+'px' // 设置ul元素的宽度
        this.number++ // number自加
        // 轮播到最后一张图片时，轮播继续，瞬间跳回第一张图片的位置，设置number值为1，继续执行轮播
        //为了得到持续平移的效果，我这里将list中的第一项多复制了一份，添加为list的最后一项
        if(this.number>this.length){
          this.$refs.ul.style.left=0
          this.number=1
        }
        // 执行平移
        this.animate()
      },
      // 平移函数
      animate () {
        const target=-this.number*this.$refs.box.offsetWidth
        const e = this.$refs.ul
        clearInterval(this.timer2) // 执行循环之前清除之前没有执行完的循环（频繁点击分页）
        const speed = target>e.offsetLeft? 50 :-50 // 设置平移距离 ，判断平移方向
        // 执行平移循环
        this.timer2 = setInterval(function() {
          const val = target -e.offsetLeft
          e.style.left=e.offsetLeft+speed+'px'
          // 当平移到目标距离附近，且这个距离小于平移距离时，直接平移到目标距离，停止循环
          if(Math.abs(val)<Math.abs(speed)){
            e.style.left = target +'px'
            clearInterval(this.timer2)
          }
        },16)
      },
      // 鼠标移动到轮播组件上的时候停止轮播
      handleStop () {
        clearInterval(this.timer)
      },
      // 鼠标离开轮播组件上的时候继续轮播
      handleAuto () {
        this.timer=setInterval(this.autoPlay,2000)
      },
      // 鼠标移动到相应分页上的时候 轮播到相应图片
      handleChange (index) {
        this.number=index
        this.animate()
      }
    },
    computed:{
      // 获取轮播图的长度
      length () {
        // index 的值是从0开始的，就是说list长度为5，对应的index为0,1,2，3,4,
        return this.list.length-1
      },
      key () {
        return this.number-this.length // number值小于或等于length值，结果为0 或者负值 作为判断的依据，
        // 只有结果为0 是，index=0才符合判定
      }
    },
    mounted() {
      this.$refs.ul.style.width= (this.length+1)*this.$refs.box.offsetWidth+'px'
      this.timer=setInterval(this.autoPlay,2000)
    },
    // 离开页面后停止循环
    destroyed (){
      clearInterval(this.timer)
    }
  }
</script>

<style lang="stylus" scoped>
  .swiper
    position: relative
    width:100%
    height:0
    padding-bottom: 30.58%
    overflow: hidden
    .box
      ul
        position: relative
        top:0
        display:flex
        li
          width:100%
          img
            width:100%
    .pagination
      position:absolute
      width:100%
      bottom:20px
      display: flex
      justify-content:center
      .pink
        background:green
      .pagination-item
        width:0.5rem
        text-align: center
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
