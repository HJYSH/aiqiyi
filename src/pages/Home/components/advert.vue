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
}
</script>

<style lang="stylus" scoped>
@keyframes width{
  from{width:0}
  to {width:1090px}
}
  .advert
    font-size :14px
    width: 100%
    overflow:hidden
    h1
      font-size 22px
      font-weight :600
    .box
      position: relative
      width: 200%
      &:after
        content:''
        display:table
        clear:both
      .content
        float:left
        width:215px
        overflow:hidden
        margin-right:5px
        &:hover
          width:1080px
          animation:width 2s
        .bigBox
          width:1080px
          .show
            float:left
            width:210px
            margin-right:5px
          .hidden
            float:left
            width:865px
            overflow:hidden
            animation:width 1s
</style>
