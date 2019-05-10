<template>
  <div class="swiper-advert">
    <div class="advert clearFloat" ref="advert">
      <div class="advert-part" v-for="(page, index) of pages" :key="index">
        <test :list="page"></test>
      </div>
    </div>
    <div class="pre" @click="handlePre">1</div>
    <div class="next" @click="handleNext">2</div>
  </div>
</template>

<script>
import Test from './advert/advert-part'
export default {
  name: 'HomeAdvert',
  components:{
    Test
  },
  data () {
    return{
      key:0,
      show:false,
      showChose:[
        {
          id:'1',
          show:true
        },
        {
          id:'2',
          show:true
        },
        {
          id:'3',
          show:true
        }
      ],
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
          imgUrl1:'//static-s.iqiyi.com/common/20190410/cupid/d2/aa/515ef4ad-e095-410a-a306-db5c733036fb_static.jpg',
          imgUrl2:'https://static-s.iqiyi.com/common/20181022/cupid/c0/69/8746f919-2ad2-4e56-9de0-a635a8b23cc0.jpg'
        },
        {
          id:'004',
          imgUrl1:'//static-s.iqiyi.com/common/20180928/cupid/b0/05/f6df20d3-fead-4088-8e58-3ba6db0c2172.jpg',
          imgUrl2:'https://static-s.iqiyi.com/common/20181022/cupid/c0/69/8746f919-2ad2-4e56-9de0-a635a8b23cc0.jpg'
        },
        {
          id:'005',
          imgUrl1:'//static-s.iqiyi.com/common/20180928/cupid/b0/05/f6df20d3-fead-4088-8e58-3ba6db0c2172.jpg',
          imgUrl2:'https://static-s.iqiyi.com/common/20181022/cupid/c0/69/8746f919-2ad2-4e56-9de0-a635a8b23cc0.jpg'
        },
        {
          id:'006',
          imgUrl1:'https://static-s.iqiyi.com/common/20181022/cupid/9f/e0/d76b9239-e3e0-4dac-b4d4-c5d5c51c6a69.jpg',
          imgUrl2:'https://static-s.iqiyi.com/common/20181022/cupid/c0/69/8746f919-2ad2-4e56-9de0-a635a8b23cc0.jpg'
        },
        {
          id:'007',
          imgUrl1:'https://static-s.iqiyi.com/common/20181022/cupid/9f/e0/d76b9239-e3e0-4dac-b4d4-c5d5c51c6a69.jpg',
          imgUrl2:'https://static-s.iqiyi.com/common/20181022/cupid/c0/69/8746f919-2ad2-4e56-9de0-a635a8b23cc0.jpg'
        },
        {
          id:'008',
          imgUrl1:'https://static-s.iqiyi.com/common/20181022/cupid/9f/e0/d76b9239-e3e0-4dac-b4d4-c5d5c51c6a69.jpg',
          imgUrl2:'https://static-s.iqiyi.com/common/20181022/cupid/c0/69/8746f919-2ad2-4e56-9de0-a635a8b23cc0.jpg'
        },
        {
          id:'009',
          imgUrl1:'//static-s.iqiyi.com/common/20190410/cupid/d2/aa/515ef4ad-e095-410a-a306-db5c733036fb_static.jpg',
          imgUrl2:'https://static-s.iqiyi.com/common/20181022/cupid/c0/69/8746f919-2ad2-4e56-9de0-a635a8b23cc0.jpg'
        },
        {
          id:'010',
          imgUrl1:'//static-s.iqiyi.com/common/20180928/cupid/b0/05/f6df20d3-fead-4088-8e58-3ba6db0c2172.jpg',
          imgUrl2:'https://static-s.iqiyi.com/common/20181022/cupid/c0/69/8746f919-2ad2-4e56-9de0-a635a8b23cc0.jpg'
        },
        {
          id:'011',
          imgUrl1:'https://static-s.iqiyi.com/common/20181022/cupid/9f/e0/d76b9239-e3e0-4dac-b4d4-c5d5c51c6a69.jpg',
          imgUrl2:'https://static-s.iqiyi.com/common/20181022/cupid/c0/69/8746f919-2ad2-4e56-9de0-a635a8b23cc0.jpg'
        },
        {
          id:'012',
          imgUrl1:'https://static-s.iqiyi.com/common/20181022/cupid/9f/e0/d76b9239-e3e0-4dac-b4d4-c5d5c51c6a69.jpg',
          imgUrl2:'https://static-s.iqiyi.com/common/20181022/cupid/c0/69/8746f919-2ad2-4e56-9de0-a635a8b23cc0.jpg'
        },
        {
          id:'013',
          imgUrl1:'//static-s.iqiyi.com/common/20180928/cupid/b0/05/f6df20d3-fead-4088-8e58-3ba6db0c2172.jpg',
          imgUrl2:'https://static-s.iqiyi.com/common/20181022/cupid/c0/69/8746f919-2ad2-4e56-9de0-a635a8b23cc0.jpg'
        },
        {
          id:'014',
          imgUrl1:'https://static-s.iqiyi.com/common/20181022/cupid/9f/e0/d76b9239-e3e0-4dac-b4d4-c5d5c51c6a69.jpg',
          imgUrl2:'https://static-s.iqiyi.com/common/20181022/cupid/c0/69/8746f919-2ad2-4e56-9de0-a635a8b23cc0.jpg'
        },
        {
          id:'015',
          imgUrl1:'//static-s.iqiyi.com/common/20190410/cupid/d2/aa/515ef4ad-e095-410a-a306-db5c733036fb_static.jpg',
          imgUrl2:'https://static-s.iqiyi.com/common/20181022/cupid/c0/69/8746f919-2ad2-4e56-9de0-a635a8b23cc0.jpg'
        },
        {
          id:'016',
          imgUrl1:'//static-s.iqiyi.com/common/20180928/cupid/b0/05/f6df20d3-fead-4088-8e58-3ba6db0c2172.jpg',
          imgUrl2:'https://static-s.iqiyi.com/common/20181022/cupid/c0/69/8746f919-2ad2-4e56-9de0-a635a8b23cc0.jpg'
        },
        {
          id:'017',
          imgUrl1:'https://static-s.iqiyi.com/common/20181022/cupid/9f/e0/d76b9239-e3e0-4dac-b4d4-c5d5c51c6a69.jpg',
          imgUrl2:'https://static-s.iqiyi.com/common/20181022/cupid/c0/69/8746f919-2ad2-4e56-9de0-a635a8b23cc0.jpg'
        },
        {
          id:'018',
          imgUrl1:'https://static-s.iqiyi.com/common/20181022/cupid/9f/e0/d76b9239-e3e0-4dac-b4d4-c5d5c51c6a69.jpg',
          imgUrl2:'https://static-s.iqiyi.com/common/20181022/cupid/c0/69/8746f919-2ad2-4e56-9de0-a635a8b23cc0.jpg'
        }
      ]
    }
  },
  methods:{
    handleNext() {
      this.key++
      if(this.key>=this.pages.length){
        this.key=0
      }
      this.$refs.advert.style.left=-this.key*this.advertWidth+'px'
    },
    handlePre(){
      this.key--
      if(this.key<0){
        this.key=this.pages.length-1
      }
      this.$refs.advert.style.left=-this.key*this.advertWidth+'px'
    }
  },
  computed:{
    pages(){
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index/6)
        if(!pages[page]){
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    },
    advertWidth(){
      return this.$refs.advert.offsetWidth/3
    }
  }
}
</script>

<style lang="stylus" scoped>
  .swiper-advert
    position:relative
    .advert
      width:3870px
      position: relative
      .advert-part
        float:left
    .pre
      position: absolute
      z-index :99
      width:20px
      height:20px
      margin-top:5px
      left:0
      top:66.4px
      background: red
    .next
      position: absolute
      z-index :99
      width:20px
      height:20px
      margin-top:5px
      right:0
      top:66.4px
      background: red
</style>
