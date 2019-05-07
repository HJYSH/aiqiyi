<template>
  <div class="advert">
    <h1>推广广告</h1>
    <div class="box" ref="box">
      <div class="content chose2" v-for="item of list" :key="item.id">
        <div class="bigBox">
          <div class="show"><img :src="item.imgUrl1" /></div>
          <div class="hidden">
            <img :src="item.imgUrl2" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Test',
    data () {
      return{
        list:[
          {
            id:'001',
            imgUrl1:'https://static-s.iqiyi.com/common/20181022/cupid/9f/e0/d76b9239-e3e0-4dac-b4d4-c5d5c51c6a69.jpg',
            imgUrl2:'https://static-s.iqiyi.com/common/20181022/cupid/c0/69/8746f919-2ad2-4e56-9de0-a635a8b23cc0.jpg'
          },
          {
            id:'002',
            imgUrl1:'https://static-s.iqiyi.com/common/20181022/cupid/9f/e0/d76b9239-e3e0-4dac-b4d4-c5d5c51c6a69.jpg',
            imgUrl2:'https://static-s.iqiyi.com/common/20181022/cupid/c0/69/8746f919-2ad2-4e56-9de0-a635a8b23cc0.jpg'
          },
          {
            id:'003',
            imgUrl1:'https://static-s.iqiyi.com/common/20181022/cupid/9f/e0/d76b9239-e3e0-4dac-b4d4-c5d5c51c6a69.jpg',
            imgUrl2:'https://static-s.iqiyi.com/common/20181022/cupid/c0/69/8746f919-2ad2-4e56-9de0-a635a8b23cc0.jpg'
          },
          {
            id:'004',
            imgUrl1:'https://static-s.iqiyi.com/common/20181022/cupid/9f/e0/d76b9239-e3e0-4dac-b4d4-c5d5c51c6a69.jpg',
            imgUrl2:'https://static-s.iqiyi.com/common/20181022/cupid/c0/69/8746f919-2ad2-4e56-9de0-a635a8b23cc0.jpg'
          },
          {
            id:'005',
            imgUrl1:'https://static-s.iqiyi.com/common/20181022/cupid/9f/e0/d76b9239-e3e0-4dac-b4d4-c5d5c51c6a69.jpg',
            imgUrl2:'https://static-s.iqiyi.com/common/20181022/cupid/c0/69/8746f919-2ad2-4e56-9de0-a635a8b23cc0.jpg'
          },
          {
            id:'006',
            imgUrl1:'https://static-s.iqiyi.com/common/20181022/cupid/9f/e0/d76b9239-e3e0-4dac-b4d4-c5d5c51c6a69.jpg',
            imgUrl2:'https://static-s.iqiyi.com/common/20181022/cupid/c0/69/8746f919-2ad2-4e56-9de0-a635a8b23cc0.jpg'
          },
        ]
      }
    },
    methods: {
      auto () {
        var child=this.$refs.box.children
        for(let i=0;i<=child.length-1;i++){
          if(i===child.length-1){
            child[i].onmouseenter=function () {
              for(let j=0;j<child.length-1;j++){
                if(j<i-1){
                  child[j].className='chose content'
                }
              }
            }
          }
          else{
            child[i].onmouseenter=function () {
              for(let j=0;j<child.length-1;j++){
                if(j<i||j>i+1){
                  child[j].className='chose content'
                }
              }
            }
          }
          child[i].onmouseleave=function () {
            for(let j=0;j<child.length-1;j++){
              child[j].className='content chose2'
            }
          }
        }
      }
    },
    mounted() {
      this.auto()
    }
  }
</script>

<style lang="stylus" scoped>
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
      .chose
        width:0
        padding-right:0
      .chose2
        width:210px
        padding-right:5px
      .content
        position:relative
        float:left
        overflow:hidden
        transition: all .7s cubic-bezier(.46,.98,.54,1.1);
        &:hover
          width:1070px;
        .bigBox
          overflow: hidden
          width:1080px
          .show
            float:left
            width:210px
            padding-right:5px
            transition: all .7s cubic-bezier(.46,.98,.54,1.1);
          .hidden
            float:left
            width:860px
            overflow:hidden
            transition: all .7s cubic-bezier(.46,.98,.54,1.1);
</style>
