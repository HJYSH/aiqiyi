<template>
  <div class="movie">
    <div class="movie-left">
      <a class="left-item">
        <div class="item-imge"><img src="http://pic6.iqiyipic.com/image/20190716/44/1a/a_100092253_m_601_m7_260_360.jpg"></div>
        <p class="desc">时间都知道</p>
        <div class="image-hover">2</div>
      </a>
      <div class="left-item">1</div>
      <div class="left-item">1</div>
      <div class="left-item">1</div>
      <div class="left-item">1</div>
      <div class="left-item">1</div>
      <div class="left-item">1</div>
      <div class="left-item">1</div>

    </div>
    <div class="movie-right">2</div>
  </div>
</template>

<script>
  export default {
    name: 'HomeMovie'
  }
</script>

<style lang="stylus" scoped>
  .movie
    display: flex
    justify-content: space-between
    .movie-left
      width: 83%
      display:flex
      justify-content: space-between
      flex-wrap: wrap
      .left-item
        position:relative
        width: 19.52%
        background: #f8f8f8
        margin-top:10px;
        .item-imge
          height:0
          padding-bottom:140%
          img
            width:100%
        p
          padding:6px 10px;
        .image-hover
          position:absolute
          width: 120%
          height:0
          padding-bottom: 170%
          top: -5%
          background:#fff
          left:-10%
          z-index:999
          display:none
        &:hover .image-hover
          display:block
    .movie-right
      width: 16.6%
      background-color: black
</style>
