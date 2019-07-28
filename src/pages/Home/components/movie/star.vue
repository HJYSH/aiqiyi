<template>
  <div>
    <div class="mark">
      <div class="progress">
        <div class="star" ref="star"></div>
        <div class="mouse-enter">
          <div class="enter-item">
            <div class="item-1"  @mouseenter="changeProgress(1)" @mouseleave="mouseLearve" @click="handleChange(1)"></div>
            <div class="item-2"  @mouseenter="changeProgress(2)" @mouseleave="mouseLearve" @click="handleChange(2)"></div>
          </div>
          <div class="enter-item">
            <div class="item-1"  @mouseenter="changeProgress(3)" @mouseleave="mouseLearve" @click="handleChange(3)"></div>
            <div class="item-2"  @mouseenter="changeProgress(4)" @mouseleave="mouseLearve" @click="handleChange(4)"></div>
          </div>
          <div class="enter-item">
            <div class="item-1"  @mouseenter="changeProgress(5)" @mouseleave="mouseLearve" @click="handleChange(5)"></div>
            <div class="item-2"  @mouseenter="changeProgress(6)" @mouseleave="mouseLearve" @click="handleChange(6)"></div>
          </div>
          <div class="enter-item">
            <div class="item-1"  @mouseenter="changeProgress(7)" @mouseleave="mouseLearve" @click="handleChange(7)"></div>
            <div class="item-2"  @mouseenter="changeProgress(8)" @mouseleave="mouseLearve" @click="handleChange(8)"></div>
          </div>
          <div class="enter-item">
            <div class="item-1"  @mouseenter="changeProgress(9)" @mouseleave="mouseLearve" @click="handleChange(9)"></div>
            <div class="item-2"  @mouseenter="changeProgress(10)" @mouseleave="mouseLearve" @click="handleChange(10)"></div>
          </div>
        </div>
      </div>
      <div class="mark-number">
        <span v-show="progress>0">{{progress}}</span>
        <span v-show="progress===0">未评分</span>
      </div>
      <a class="collect">收藏</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MovieStar',
    data(){
      return{
        progress:0,
        click:0,
      }
    },
    methods:{
      changeProgress(e) {
        if(e%2===0){
          this.$refs.star.style.width=12.5*e+'px'
        }else{
          this.$refs.star.style.width=12.5*(e-1)+7.5+'px'
        }
        this.progress=e
      },
      mouseLearve() {
        this.progress=this.click
        if(this.progress%2===0){
          this.$refs.star.style.width=12.5*this.progress+'px'
        }else{
          this.$refs.star.style.width=12.5*(this.progress-1)+7.5+'px'
        }
      },
      handleChange(e) {
        this.click=e
        this.progress=e
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .mark
    display: flex
    align-items center
    .progress
      position:relative
      flex:1
      width:125px
      background:url("https://www.iqiyipic.com/common/fix/site-v4/grade-star.png") no-repeat 0 0
      margin-left:10px
      height:15px
      .star
        background:url("https://www.iqiyipic.com/common/fix/site-v4/grade-star.png") no-repeat 0 -20px
        width:0
        height:15px
      .mouse-enter
        position:absolute
        top:0
        display: flex
        justify-content left
        z-index:9999
        .enter-item
          display flex
          width:25px
          height:20px
          overflow: hidden
          .item-1
            width:7.5px
            height:20px
            overflow hidden
          .item-2
            width:17.5px
            height:20px
            overflow hidden
    .mark-number
      width:60px
      text-align center
      font-size :14px
    .collect
      margin-right: 10px
      padding:0 10px
      height:20px
      line-height:20px
      color:#fff
      background:#00be06
      border-radius 10px
</style>
