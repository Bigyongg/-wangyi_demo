<template>
	<div>
   <ul>
     <li class="home">
       <a href="javasript:"  @click="this.$router.replace('/home')"><i class=" iconfont iconshouye1"></i></a>
     </li>
     <li class="text">网易严选</li>
     <li class="two_icons">
       <a href="javasript:" class="search"  @click="goSearch"><i class=" iconfont iconweibiaoti-"></i></a>
       <a href="javasript:" class="shopping" @click="$router.replace('/shopping')"> <i class=" iconfont icongouwuche2"></i></a>
     </li>
   </ul>
  </div>
</template>

<script>
  import Search from '../../../../components/Search/Search'
  export default {
    name: "Header",
    components:{
      Search
    },
    methods:{
      goSearch(){
        this.$router.replace('/search')
      }
    }
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  ul
    width 100%
    height 88px
    align-items center
    justify-content: space-between
    display flex
    .home
      i
        margin-left 35px
        font-size: 60px
    .text
      font-weight 700
      font-size: 40px
    .two_icons
      i
        font-size: 60px
      .shopping
        margin-right 35px
      .search
        margin-right 10px
</style>
