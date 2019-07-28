<template>
  <div class="movie">
    <div class="movie-left">
      <a class="left-item">
        <div class="item-imge"><img src="http://pic6.iqiyipic.com/image/20190716/44/1a/a_100092253_m_601_m7_260_360.jpg"></div>
        <p class="desc">时间都知道</p>
        <div class="image-hover">
          <video class="hover-video" muted autoplay="autoplay" loop="loop">
            <source src="//data.video.iqiyi.com/videos/v0/20190723/3a/4c/8d20f56dea9cc8bb13775f64d94f7d33.mp4?m=v&qd_uri=dash&qd_sc=431e27dc896e7b9bdb9c0fd201c3781b&pv=0.2&qd_tm=1563931423791&qd_p=7155ff05&qdv=1&ssl=1&qd_vip=0&qd_src=01010021010000000000&dis_src=vrs&qd_uid=1388566983&qd_k=6743f8f2acc5f2fe826011fe757dab48&qd_ip=7155ff05" type="video/mp4">
          </video>
          <div class="video-item">
            <p class="item-h">时间都知道</p>
            <p class="item-p">7.4</p>
          </div>
          <div class="video-item">
            <p><span>类型</span>:<span>内地 都市 剧情</span></p>
            <p>2019</p>
          </div>
          <p>更新至13集/44集；VIP会员每日22点更新，非会员次日22点观看</p>
          <p><span>导演：</span>钟澍佳</p>
          <p><span>主演：</span>唐嫣/窦骁/杨烁/吕一</p>
          <p><span>亮点：</span>31岁的时简在前去看望丈夫叶珈成的飞机上偶遇易贸集团老板...</p>
          <movie-star></movie-star>
        </div>
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
  import MovieStar from "./movie/star";
  export default {
    name: 'HomeMovie',
    components:{
      MovieStar

    },
    data(){
      return{
        progress: 0
      }
    },
    methods:{
      changeProgress(e) {
        this.$refs.star.style.width=25*e+'px'
      },
      mouseLearve() {
        this.$refs.star.style.width=this.progress*25 + 'px'
      },
      handleChange(e) {
        this.progress=e
      }
    }
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
          padding-bottom: 200%
          top: -5%
          background:#fff
          left:-10%
          z-index:999
          cursor pointer
          display:none
          box-shadow : 1px 1px 8px #888888
          .hover-video
            width:100%
          .video-item
            display: flex
            justify-content: space-between
            .item-h
              font-size :18px
              color:black
            .item-p
              font-size :18px
              color:#ff6000
        &:hover .image-hover
          display:block
    .movie-right
      width: 16.6%
      background-color: black
</style>
