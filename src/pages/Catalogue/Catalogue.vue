<template>
  <div class="category_box">
        <Search />
        <LeftList />
        <RightList />
     
  </div>
</template>

<script>
  import Search from './components/Search/Search'
  import LeftList from './components/LeftList/LeftList'
  import RightList from './components/RightList/RightList'
  import {mapState} from 'vuex'
  export default {
    name: "Catalogue",
    
    components:{
      LeftList,
      RightList,
      Search
    },
    mounted() {
      // 触发 action 调用，进行 发送请求 ；
      console.log(this.$store);
      this.$store.dispatch('getCategoryData')
    },
  
    computed:{
      ...mapState({
        categoryData: state => state.category.categoryData
      })
    },
  
  
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .category_box
    width 100%
    padding-top 88px
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


</style>
