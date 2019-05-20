<template>
	<!--小图标分类区域-->
  <div class="wrap">
    <ul class="Product_list" v-if="homeData.kingKongModule">
      <li v-for="(item,index) in homeData.kingKongModule.kingKongList">
        <a href="javascript:">
        <img :src="item.picUrl"/>
        <span>{{item.text}}</span>
        </a>
      </li>
      
     
      
      
     
      
      
    </ul>
    
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "ProductClass",
    computed:{
      ...mapState({
        homeData: state=>state.home.homeData
      })
    },
    async mounted(){
     await this.$store.dispatch('GetHomedatas')
     
     
    }
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  ul
    display flex
    flex-wrap wrap
    margin-bottom 40px
    li
      margin 10px 20px 0
      height 156px
      width 110px
      a
        width 100%
        height 100%
        flex-direction column
        justify-content center
        align-items center
        display flex
        img
          width 110px
          height 110px
        p
          color #333
          font-size: 24px
        
  
  
</style>
