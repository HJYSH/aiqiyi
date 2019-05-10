<template>
  <div class="part clearFloat">
    <h1>推广广告</h1>
    <div class="box clearFloat" ref="box">
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
  props:{
    list:Array
  },
  data () {
    return{
    }
  },
  methods: {
    auto () {
      var child=this.$refs.box.children
      for(let i=0, length=child.length-1;i<=length;i++){
        if(i===length){
          child[i].onmouseenter=function () {
            for(let j=0;j<=length;j++){
              if(j<i-1){
                child[j].className='chose content'
              }
            }
          }
        }
        else{
          child[i].onmouseenter=function () {
            for(let j=0;j<=length;j++){
              if(j<i || j>i+1){
                child[j].className='chose content'
              }
            }
          }
        }
        child[i].onmouseleave=function () {
          for(let j=0;j<=length;j++){
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
  .part
    position:relative
    overflow:hidden
    float:left
    font-size :14px
    width: 1290px
    h1
      font-size 22px
      font-weight :600
    .box
      position:relative
      overflow:hidden
      width:1400px
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
