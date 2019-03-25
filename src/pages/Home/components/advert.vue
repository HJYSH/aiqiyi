<template>
  <div class="advert">
    <h1>推广广告</h1>
    <div class="box" ref="box">
      <div class="content">
        <div class="bigBox">
          <div class="show"><img src="https://static-s.iqiyi.com/common/20181022/cupid/9f/e0/d76b9239-e3e0-4dac-b4d4-c5d5c51c6a69.jpg" /></div>
          <div class="hidden">
            <img src="https://static-s.iqiyi.com/common/20181022/cupid/c0/69/8746f919-2ad2-4e56-9de0-a635a8b23cc0.jpg" />
          </div>
        </div>
      </div>
      <div class="content">
        <div class="bigBox">
          <div class="show"><img src="https://static-s.iqiyi.com/common/20181022/cupid/9f/e0/d76b9239-e3e0-4dac-b4d4-c5d5c51c6a69.jpg" /></div>
          <div class="hidden">
            <img src="https://static-s.iqiyi.com/common/20181022/cupid/c0/69/8746f919-2ad2-4e56-9de0-a635a8b23cc0.jpg" />
          </div>
        </div>
      </div>
      <div class="content">
        <div class="bigBox">
          <div class="show"><img src="https://static-s.iqiyi.com/common/20181022/cupid/9f/e0/d76b9239-e3e0-4dac-b4d4-c5d5c51c6a69.jpg" /></div>
          <div class="hidden">
            <img src="https://static-s.iqiyi.com/common/20181022/cupid/c0/69/8746f919-2ad2-4e56-9de0-a635a8b23cc0.jpg" />
          </div>
        </div>
      </div>
      <div class="content">
        <div class="bigBox">
          <div class="show"><img src="https://static-s.iqiyi.com/common/20181022/cupid/9f/e0/d76b9239-e3e0-4dac-b4d4-c5d5c51c6a69.jpg" /></div>
          <div class="hidden">
            <img src="https://static-s.iqiyi.com/common/20181022/cupid/c0/69/8746f919-2ad2-4e56-9de0-a635a8b23cc0.jpg" />
          </div>
        </div>
      </div>
      <div class="content">
        <div class="bigBox">
          <div class="show"><img src="https://static-s.iqiyi.com/common/20181022/cupid/9f/e0/d76b9239-e3e0-4dac-b4d4-c5d5c51c6a69.jpg" /></div>
          <div class="hidden">
            <img src="https://static-s.iqiyi.com/common/20181022/cupid/c0/69/8746f919-2ad2-4e56-9de0-a635a8b23cc0.jpg" />
          </div>
        </div>
      </div>
      <div class="content">
        <div class="bigBox">
          <div class="show"><img src="https://static-s.iqiyi.com/common/20181022/cupid/9f/e0/d76b9239-e3e0-4dac-b4d4-c5d5c51c6a69.jpg" /></div>
          <div class="hidden">
            <img src="https://static-s.iqiyi.com/common/20181022/cupid/c0/69/8746f919-2ad2-4e56-9de0-a635a8b23cc0.jpg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeAdvert',
  methods: {
    auto () {
      var box= this.$refs.box
      var child=this.$refs.box.children
      for(let i=0;i<=child.length-1;i++){
        if(i===child.length-1){
          child[i].onmouseenter=function () {
            animate(box,-(i-1)*215)
            child[i].className="content handle-hover"
          }
          child[i].onmouseleave=function () {
            child[i].className="content handle-hidden"
            animate(box,0)
          }
        }else{
          // 这里用onmouseenter替代onmouseover因为onmouseenter不支持冒泡
          child[i].onmouseenter=function () {
            animate(box,-i*215)
            child[i].className="content handle-hover"
          }
          child[i].onmouseleave=function () {
            child[i].className="content handle-hidden"
            animate(box,0)
          }
        }
      }
      function animate(ele,target){
        clearInterval(ele.timer);
        var speed = (target>ele.offsetLeft)?10:-10;
        ele.timer = setInterval(function () {
          var val = target - ele.offsetLeft;
          ele.style.left = ele.offsetLeft + speed + "px";
          if(Math.abs(val)<Math.abs(speed)){
            ele.style.left = target + "px";
            clearInterval(ele.timer);
          }
        },10)
      }
    }
  },
  mounted() {
    this.auto()
  }
}
</script>

<style lang="stylus" scoped>
@keyframes move{
  from{left:0}
  to {left:-215px}
}
@keyframes all{
  from{width:210px}
  to {width:1090px}
}
@keyframes reback{
  from{width:1090px}
  to {width:210px}
}
  .advert
    position:relative
    font-size :14px
    overflow:hidden
    width: 100%
    h1
      font-size 22px
      font-weight :600
    .box
      position:relative
      overflow:hidden
      width: 400%
      &:after
        content:''
        display:table
        clear:both
      .content
        float:left
        width:210px
        overflow:hidden
        padding-right:5px
        .bigBox
          overflow: hidden
          width:1080px
          .show
            float:left
            width:210px
            padding-right:5px
          .hidden
            float:left
            width:860px
            overflow:hidden
      .handle-hover
        width:1070px
        animation:all 0.7s
      .handle-hidden
        animation: reback 0.7s
    .box-hover
      animation:move 0.7s
</style>
