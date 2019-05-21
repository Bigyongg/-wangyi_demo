<template>
  <div class="cate_header">
    <div class="search_box">
      <div @click="$router.push('/search')">
        <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png" alt="search">
        <span>搜索商品，共19999件好物</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Search"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .cate_header
    position fixed
    top 0
    left 0
    z-index 100
    width 100%
    height 88px
    border-bottom 1px solid #eee
    background-color: #fff
    display flex
    align-items center
    justify-content center
    .search_box
      width 675px
      height 56px
      border-radius 8px
      background-color: #ededed
      display flex
      align-items center
      justify-content center
      >div
        display flex
        align-items center
        >img
          width 28px
          height 28px
          margin-right 10px
        >span
          font-size 28px
</style>
