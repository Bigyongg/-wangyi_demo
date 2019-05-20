<template>
	<!--四张图片组成的方格-->
  <div class="wrap">
    <ul four_wrap_list v-if="homeData.sceneLightShoppingGuideModule">
      <li v-for="(items,index) in homeData.sceneLightShoppingGuideModule" :key="index">
        <p class="big_size">{{items.styleItem.title}}</p>
        <p class="small_size">{{items.styleItem.desc}}</p>
        <div class="bottm_pics">
          <img v-for="(item,index) in items.styleItem.itemPicBeanList" height="150" width="150" :src="item.picUrl" :key="index"/>
        </div>
      </li>
      
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "NewProduct",
    computed:{
      ...mapState({
        homeData: state => state.home.homeData
      })
    },
    async mounted(){
     await this.$store.dispatch('GetHomedatas')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  ul
    
    display flex
    flex-wrap wrap
    justify-content center
    .big_size
      color #333
      font-size: 32px
    .small_size
      margin 10px 0 10px 0
      color #7f7f7f
      font-size: 24px
    li
      box-sizing border-box
      padding 20px 0 0 20px
      margin 4px 0 0 4px;
      background-color rgba(0,0,0,0.1)
      width 343px
      height 260px
      .bottm_pics
        justify-content flex-start
        align-items flex-start
        display flex
        height 260px
        width 343px
      
  
  
</style>
