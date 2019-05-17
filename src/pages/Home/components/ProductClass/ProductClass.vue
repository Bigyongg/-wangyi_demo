<template>
	<!--小图标分类区域-->
  <div class="wrap">
    <ul class="Product_list">
      <li>
        <a href="javascript:">
        <img src="../../../../common/img/loading.gif" height="110" width="110"/>
        <span>鞋包</span>
        </a>
      </li>
      
      
     
      
      
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ProductClass"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .wrap
    
    height 332px
    width 100%
    .Product_list
      align-items center
      justify-content center
      flex-wrap wrap
      display flex
      li
        width 20%
        height 156px
        span
          display flex
          justify-content center
          padding 10px
          font-size 23px;
        
    
    
</style>
