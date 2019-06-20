<template>
  <div class="part clearFloat">
    <h1>推广广告</h1>
    <div class="box clearFloat" ref="box">
      <div class="content chose2" v-for="(item, index) of list" :key="item.id">
        <div class="bigBox" @mouseenter="enter(index)" @mouseleave="leave">
          <div class="show"><img :src="item.imgUrl1" :alt="item.id" /></div>
          <div class="hidden">
            <img :src="item.imgUrl2" :alt="item.id" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Test',
  props: {
    list: Array
  },
  data() {
    return {}
  },
  methods: {
    enter(i) {
      if(i===this.length) {
        // 当选中的是最后一项，除了倒数帝二项和最后一项，都添加class--chose，宽度为0
        for (let j = 0, length2=i-1; j <length2; j++) {
          this.child[j].className = 'chose content'
        }
      }else{
        // 其他的为选中的选项和他的后一位选项之外的项目添加chose
        for (let j = 0; j <= this.length; j++) {
          if (j < i || j > i + 1) {
            this.child[j].className = 'chose content'
          }
        }
      }
    },
    leave() {
      for (let j = 0; j <= this.length; j++) {
        this.child[j].className = 'content chose2'
      }
    }
  },
  computed:{
    child(){
      return this.$refs.box.children
    },
    length(){
      return this.$refs.box.children.length-1
    }
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
