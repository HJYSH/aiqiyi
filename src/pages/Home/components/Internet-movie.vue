<template>
  <div class="internet">
    <div class="box" v-for="item of list" :key="item.id">
      <div class="internet-item">
        <div class="item-title">
          <div class="title">
            <h2 class="title-h">{{item.h}}</h2>
            <span class="h-after">{{item.more}}</span>
          </div>
          <div class="title-right">
            <span>{{item.recommend}}</span>
            <span> / </span>
            <span>{{item.join}}</span>
          </div>
        </div>
        <div class="item-content" v-for="inner of item.content" :key="inner.id">
          <div class="content">
            <div class="content-item">
              <img class="content-img" :alt="inner.h3" :title="inner.h3" :src="inner.imgUrl" />
            </div>
            <div class="content-desc">
              <h3>{{inner.h3}}</h3>
              <p>{{inner.p}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeInternet',
  data() {
    return{
      list:[
        {
          id:'001',
          h:'网络电影',
          more:'更多>',
          recommend:'独播网大推荐',
          join:'我要合作',
          content:[
            {
              id:'001',
              h3:'嗜血将军2白皮少女',
              p:'白皮少女嗜血如命',
              imgUrl:'https://pic4.iqiyipic.com/image/20190319/ab/a5/v_126318303_m_601_m7_220_124.jpg'
            },
            {
              id:'002',
              h3:'嗜血将军2白皮少女',
              p:'白皮少女嗜血如命',
              imgUrl:'https://pic4.iqiyipic.com/image/20190319/ab/a5/v_126318303_m_601_m7_220_124.jpg'
            },
            {
              id:'003',
              h3:'嗜血将军2白皮少女',
              p:'白皮少女嗜血如命',
              imgUrl:'https://pic4.iqiyipic.com/image/20190319/ab/a5/v_126318303_m_601_m7_220_124.jpg'
            }
          ]
        },
        {
          id:'002',
          h:'网络电影',
          more:'更多>',
          recommend:'独播网大推荐',
          join:'我要合作',
          content:[
            {
              id:'001',
              h3:'嗜血将军2白皮少女',
              p:'白皮少女嗜血如命',
              imgUrl:'https://pic4.iqiyipic.com/image/20190319/ab/a5/v_126318303_m_601_m7_220_124.jpg'
            },
            {
              id:'002',
              h3:'嗜血将军2白皮少女',
              p:'白皮少女嗜血如命',
              imgUrl:'http://pic8.iqiyipic.com/image/20190712/bb/c5/v_132483497_m_601_m1_220_124.jpg'
            },
            {
              id:'003',
              h3:'嗜血将军2白皮少女',
              p:'白皮少女嗜血如命',
              imgUrl:'https://pic4.iqiyipic.com/image/20190319/ab/a5/v_126318303_m_601_m7_220_124.jpg'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .internet
    width:1290px
    &:after
      content: ''
      display:table
      clear:both
    .box
      float:left
      width:640px
      padding-right:5px
      overflow: hidden
      .internet-item
        float:left
        box-sizing border-box
        width:645px
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
      .item-content
        float:left
        width:210px
        padding-right:5px
        .content
          .content-item
            width:100%
            height:0
            padding-bottom:60%
            overflow:hidden
          .content-img
            width:100%
          .content-desc
            padding-left:10px
            h3
              font-size :16px
            p
              color:#666
</style>
