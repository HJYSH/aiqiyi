<template>
  <div>
    <div class="item-title">
      <div class="title">
        <h2 class="title-h"><span class="title-h iconfont">&#xe601;</span>网络电影</h2><span class="h-after">更多&gt;</span>
      </div>
      <div class="title-right">
        <span>爱奇艺早班机</span>
        <span> / </span>
        <span>娱乐猛回头</span>
        <span> / </span>
        <span>泡菜帮</span>
        <span> / </span>
        <span>音乐大抖腿</span>
        <span> / </span>
        <span>七分七秒</span>
        <span> / </span>
        <span>说唱有新番</span>
      </div>
    </div>
    <div class="content" >
      <div
        class="content-left"
        ref="content"
        @mouseleave="leave"
        @mouseenter="enter"
      >
        <div class="left-item" :key="item.id" v-for="item of left1" v-show="show">
          <div class="left-img">
            <img class="img" :src="item.imgUrl" />
          </div>
          <div class="left-desc">
            <h4>{{item.h}}</h4>
            <p>{{item.p}}</p>
          </div>
        </div>
        <div class="left-item" v-for="item of left2" v-show="!show">
          <div class="left-img">
            <img class="img" :src="item.imgUrl" />
          </div>
          <div class="left-desc">
            <h4>{{item.h}}</h4>
            <p>{{item.p}}</p>
          </div>
        </div>
        <div class="toggle">
          <div class="pre iconfont" @click="toggle">&#xe629;</div>
          <div class="next iconfont" @click="toggle">&#xe6aa;</div>
        </div>
      </div>
      <div class="content-right">
        <div class="right-item" v-for="item of list" :key="item.index">
          <div class="list-item"  v-for="inner of item" :key="inner.id">
            <div class="item-img">
              <img class="img" :src="inner.imgUrl">
            </div>
            <p class="desc">{{inner.desc}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeEntertainment',
    data(){
      return{
        show:true,
        timer:null,
        left1:[
          {
        imgUrl:'https://pic1.iqiyipic.com/common/lego/20190327/ddc3e63f89ff470f8ca099b38f69353e.jpg',
          id:'003',
          h:'范逼逼美容院开业 李晨范丞丞携亲友团到场剪裁',
          p:'昨天，范冰冰开的美容院开业'
          }
        ],
        left2:[
          {
            imgUrl:'https://pic1.iqiyipic.com/common/lego/20190328/63c6b02052894ec48782b7f1697efa7c.jpg',
            id:'004',
            h:'85范逼逼美容院开业 李晨范丞丞携亲友团到场剪裁',
            p:'745昨天，范冰冰开的美容院开业'
          }
        ],
        list:[
          [
            {
              imgUrl:'https://pic1.iqiyipic.com/lequ/20190323/7c5ec4609f32463791c6cc07418e22cd.jpg',
              id: '001',
              desc:'广西建筑撞脸美国国会这件事有点意思'
            },
            {
              imgUrl:'https://pic1.iqiyipic.com/lequ/20190323/7c5ec4609f32463791c6cc07418e22cd.jpg',
              id: '002',
              desc:'广西建筑撞脸美国国会这件事有点意思'
            }
          ],
          [
            {
              imgUrl:'https://pic1.iqiyipic.com/lequ/20190323/7c5ec4609f32463791c6cc07418e22cd.jpg',
              id: '003',
              desc:'广西建筑撞脸美国国会这件事有点意思'
            },
            {
              imgUrl:'https://pic1.iqiyipic.com/lequ/20190323/7c5ec4609f32463791c6cc07418e22cd.jpg',
              id: '004',
              desc:'广西建筑撞脸美国国会这件事有点意思'
            }
          ],
          [
            {
              imgUrl:'https://pic1.iqiyipic.com/lequ/20190323/7c5ec4609f32463791c6cc07418e22cd.jpg',
              id: '005',
              desc:'广西建筑撞脸美国国会这件事有点意思'
            },
            {
              imgUrl:'https://pic1.iqiyipic.com/lequ/20190323/7c5ec4609f32463791c6cc07418e22cd.jpg',
              id: '006',
              desc:'广西建筑撞脸美国国会这件事有点意思'
            }
          ],
          [
            {
              imgUrl:'https://pic1.iqiyipic.com/lequ/20190323/7c5ec4609f32463791c6cc07418e22cd.jpg',
              id: '003',
              desc:'广西建筑撞脸美国国会这件事有点意思'
            },
            {
              imgUrl:'https://pic1.iqiyipic.com/lequ/20190323/7c5ec4609f32463791c6cc07418e22cd.jpg',
              id: '004',
              desc:'广西建筑撞脸美国国会这件事有点意思'
            }
          ],
          [
            {
              imgUrl:'https://pic1.iqiyipic.com/lequ/20190323/7c5ec4609f32463791c6cc07418e22cd.jpg',
              id: '003',
              desc:'广西建筑撞脸美国国会这件事有点意思'
            },
            {
              imgUrl:'https://pic1.iqiyipic.com/lequ/20190323/7c5ec4609f32463791c6cc07418e22cd.jpg',
              id: '004',
              desc:'广西建筑撞脸美国国会这件事有点意思'
            }
          ]
        ]
      }
    },
    methods: {
      toggle () {
        console.log('1')
        this.show=this.show===true?undefined:true
      },
      enter(){
        clearInterval(this.timer)
        this.timer=null
      },
      leave(){
        this.timer = setInterval(this.toggle, 2000)
      },
      auto(){
        this.timer = setInterval(this.toggle, 2000)
      }
    },
    mounted() {
      this.auto()
    },
    beforeDestroy() {
      clearInterval(this.timer)
      this.timer=null
    }
  }
</script>

<style lang="stylus" scoped>
  .item-title
    padding:20px 5px 20px 0
    .title
      display:inline-block
      .title-h
        display:inline-block
        font-size :24px
        font-weight :400
        line-height :28px
        padding-right:5px
        .h-after
          line-height :16px
          font-size :14px
    .title-right
      display:inline-block
      margin-left:15px
  .content
    position:relative
    display: flex
    &:after
      content:''
      display:table
      clear: both
    .content-left
      width:425px
      padding-right:5px
      overflow:hidden
      .left-item
        .left-img
          width:425px
          height:310px
          overflow:hidden
          .img
            width: 100%
            &:hover
              width: 110%
              position: relative
              top:-5%
              left: -5%
      .left-desc
        padding:5px
        background: #f8f8f8
        h4
          font-size :16px
          color:red
        p
          font-size :14px
      .toggle
        position: absolute
        width:425px
        top:135px
        left:0
        z-index: 9
        .pre
          float:left
          width:32px
          height:40px
          line-height: 40px
          font-size :24px
          background:red
          text-align :center
          cursor: pointer
          select:none
          -webkit-border-radius: 0 50% 50% 0
          -moz-border-radius: 0 50% 50% 0
          border-radius: 0 50% 50% 0
        .next
          float:right
          width:32px
          height:40px
          line-height: 40px
          font-size :24px
          background:red
          text-align :center
          cursor: pointer
          select:none
          -webkit-border-radius: 50% 0 0 50%
          -moz-border-radius: 50% 0 0 50%
          border-radius: 50% 0 0 50%
    .content-right
      flex:1
      overflow: hidden
      display:flex
      .right-item
        width:210px
        margin-right:5px
        .list-item
          width: 210px
          padding-bottom:15px
          &:hover
            color:red
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
            padding:10px
</style>
