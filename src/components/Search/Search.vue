<template>
  <div class="Search_wrap">
    <div class="container">
      <span class="icon"><i class=" iconfont iconweibiaoti-"></i></span>
      <input v-model="userInput" type="text" placeholder="美妆护肤 女王专享7折起">
      <span class="clear_img" v-if="userInput" @click="userInput=''">X</span>
      <span class="canle"  @click="$router.back()">取消</span>
      
    </div>
    <div class="hot_search">
      <span>热门搜索</span>
      <ul class="hot_search_list">
        <li><a href="">爆款 行李箱</a></li>
        <li><a href="">拖鞋</a></li>
        <li><a href="">经典polo衫89元</a></li>
        <li><a href="">风扇</a></li>
        <li><a href="">517吃货节低至5折</a></li>
        <li><a href="">袜子</a></li>
        <li><a href="">酵素洗衣液</a></li>
        <li><a href="">凉席</a></li>
        <li><a href=""> 9.9元爆品超值购</a></li>
        <li><a href="">女鞋</a></li>
        <li><a href=""> 9.9元爆品超值购</a></li>
        <li><a href="">女鞋</a></li>
  
  
      


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
    }
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
    width 100%
    span
      font-size: 28px
      color #ccc
      margin-left 20px
    .hot_search_list
      margin-left 20px
      height 495px
      width 720px
      li
        padding 0 5px 0 5px
        margin-top 15px
        margin-bottom  15px
        margin-right 82px
        color #333
        font-size: 30px
        display inline-block
        border 1px solid black
</style>
