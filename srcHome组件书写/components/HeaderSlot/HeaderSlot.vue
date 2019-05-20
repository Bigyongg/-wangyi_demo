<template>
  <div class="header_slot_box">
    <div class="left_box" @click="$router.replace('/home')">
      <i class="iconfont icon-shouye"></i>
    </div>
    <div class="center_box">
      <slot name="netease"></slot><!--<div slot="netease"><span class="netease">网易严选</span></div>-->
      <slot name="fond"></slot><!--<div slot="fond"><span :class="{active: curPos==='fond'}">发现</span></div>-->
      <slot name="specia_choice"></slot><!--<div slot="specia_choice"><span>甄选家</span></div>-->
    </div>
    <div class="right_box">
      <i class="iconfont icon-sousuo" @click="$router.push('/search')"></i>
      <i class="iconfont icon-gouwuche" @click="$router.replace('/shopcar')"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HeaderSlot'
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .header_slot_box
    position fixed
    top 0
    left 0
    width 100%
    height 88px
    padding 0 8px
    box-sizing border-box
    font-size 42px
    display flex
    align-items center
    justify-content space-between
    background-color: #fafafa
    .left_box
      margin-left 24px
      i
        font-size 51px
        line-height 75px
    .center_box
      width 60%
      margin-left 36px
      font-size 28px
      display flex
      justify-content center
      align-items center
      .netease
        font-size 40px
        font-weight 700
        color #000
      span:first-child
        width 50%
      span:last-child
        width 50%
        margin-left 36px
      span.active
        font-size 36px
        font-weight 700
        color $themeColor
    .right_box
      i
        font-size 46px
        margin-right 24px
</style>
