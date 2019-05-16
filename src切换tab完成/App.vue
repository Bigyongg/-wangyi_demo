<template>
  <div>
    <router-view />
  <footer class="footer_guide">
    <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/home'}" @click="gowalk('/home')">
    <span class="item_icon">
      <i class="iconfont iconshouye"></i>
    </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/catalogue'}" @click="gowalk('/catalogue')">
    <span class="item_icon">
      <i class="iconfont iconleimupinleifenleileibie"></i>
    </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/discren'}" @click="gowalk('/discren')">
    <span class="item_icon">
      <i class="iconfont iconphoto"></i>
    </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/shopping'}" @click="gowalk('/shopping')">
    <span class="item_icon">
      <i class="iconfont icongouwuche2"></i>
    </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/personal'}" @click="gowalk('/personal')">
    <span class="item_icon">
      <i class="iconfont icontubiaozhizuomoban"></i>
    </span>
      <span>个人</span>
    </a>
   
  </footer>

  </div>
</template>

<script>
  import Footers from './components/Footers/Footers'
  export default {
    name: "App",
    data(){
      return{
        flag:''
      }
    },
    components:{
      Footers
    },
    methods:{
      gowalk(path) {
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .footer_guide
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color red
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
