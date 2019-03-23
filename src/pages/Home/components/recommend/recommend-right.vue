<template>
  <div class="recommend-right">
    <div class="right-list">
      <div class="list-item">
        <div class="item-img">
          <div class="item-img">
            <img class="img" src="https://pic3.iqiyipic.com/lequ/20190323/7a84d443d26341408bbfeb585b00a9b8.jpg">
          </div>
        </div>
        <p class="desc">广西建筑撞脸美国国会</p>
      </div>
      <div class="list-item">
        <div class="item-img">
          <img class="img" src="https://pic1.iqiyipic.com/lequ/20190323/7c5ec4609f32463791c6cc07418e22cd.jpg">
        </div>
        <p class="desc">广西建筑撞脸美国国会</p>
      </div>
      <div class="list-item">
        <div class="item-img">
          <div class="item-img">
            <img class="img" src="https://pic3.iqiyipic.com/lequ/20190323/7a84d443d26341408bbfeb585b00a9b8.jpg">
          </div>
        </div>
        <p class="desc">广西建筑撞脸美国国会</p>
      </div>
      <div class="list-item">
        <div class="item-img">
          <img class="img" src="https://pic1.iqiyipic.com/lequ/20190323/7c5ec4609f32463791c6cc07418e22cd.jpg">
        </div>
        <p class="desc">广西建筑撞脸美国国会</p>
      </div>
      <div class="list-item">
        <div class="item-img">
          <div class="item-img">
            <img class="img" src="https://pic3.iqiyipic.com/lequ/20190323/7a84d443d26341408bbfeb585b00a9b8.jpg">
          </div>
        </div>
        <p class="desc">广西建筑撞脸美国国会</p>
      </div>
      <div class="list-item">
        <div class="item-img">
          <img class="img" src="https://pic1.iqiyipic.com/lequ/20190323/7c5ec4609f32463791c6cc07418e22cd.jpg">
        </div>
        <p class="desc">广西建筑撞脸美国国会</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendRight',
  components: {
  }
}
</script>

<style lang="stylus" scoped>
  .recommend-right
    vertical-align: top
    display:inline-block
    width:425px
    font-size :14px
    padding:5px 0 5px 5px
    margin-left:-5px
    .right-list
      font-size :0
      width:430px
      .list-item
        display:inline-block
        width: 210px
        margin-right:5px
        box-sizing :border-box
        padding-bottom:15px
        .item-img
          width: 100%
          height:0
          padding-bottom:56.1%
          overflow:hidden
          .img
            width: 100%
            &:hover
              position: relative
              left: -5%
              top:-5%
              width:110%
        .desc
          background: #F8F8F8
          font-size :14px
          text-align:center
          line-height :36px
</style>
