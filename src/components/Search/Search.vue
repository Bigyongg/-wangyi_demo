<template>
  <div class="Search_wrap">
    <div class="container">
      <span class="icon"><i class=" iconfont iconweibiaoti-"></i></span>
      <input v-model="userInput" type="text" placeholder="美妆护肤 女王专享7折起">
      <span class="clear_img" v-if="userInput" @click="userInput=''">X</span>
      <span class="canle" @click="$router.replace('/personal')">取消</span>
    </div>
    
    <div class="hot_search">
      <span>热门搜索</span>
      <ul class="hot_search_list">
        <li>上的对齐方式。</li>
        <li>项目在主轴上的对齐方式。</li>
        <li>属性定义了项目在主轴上的对齐方式。</li>
        <li>ustify-c项目在主轴上的对齐方式。</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Search",
    data(){
      return{
       userInput:''
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .Search_wrap
    position relative
    width 100%
    line-height: 50px;
    height 88px
  .container
    width 699px
    .icon
      text-align center
      width 60px
      height 56px
      display inline-block
      i
        width 60px
        height 56px
        display inline-block
        line-height: 56px
        background-color #eee
        height 56px
        margin-top 20px
        color black
        font-size: 40px;
        margin-left 20px
    .clear_img
      text-align center
      line-height: 40px
      border-radius 50%
      width 40px
      height 40px
      color white
      background-color rgba(0,0,0,0.4)
      position absolute
      top 29px
      right 126px
      z-index 3
      font-weight: 700
      font-size: 30px
    input
      font-size: 28px
      position absolute
      left 79px
      top 20px
      margin-bottom 10px
      width 550px
      height 56px
      border-width 0
      padding 0
      background-color #eee
      border-right 0px
    .canle
      margin-top 29px
      line-height 36px
      display inline-block
      width 60px
      height 36px
      font-size: 28px
      float right
    input::-webkit-input-placeholder
            /* placeholder颜色  */
            color: #ccc;
            /* placeholder字体大小  */
            font-size: 28px;
            line-height: 36px
          
  .hot_search
    margin-top 28px
    border 1px solid red
    width 100%
    span
      font-size: 28px
      color #ccc
      margin-left 20px
    .hot_search_list
      margin-left 20px
      border 1px solid red
      height 495px
      width 720px
      padding 8px 15px
      li
        margin 0 32px 0 0
        display inline-block
        border 1px solid black
</style>
