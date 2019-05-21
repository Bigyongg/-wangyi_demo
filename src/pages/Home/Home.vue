<template>
	<div>
    <Header />
    <div class="wrap_home">
        <div class="content">
        <KJFSwiper />
        <ServeClient />
        <ProductClass  />
        <OnePic />
        <NewProduct />
        <PersonalTailor />
      </div>
  </div>
  
  
  </div>
</template>

<script>
  import Header from '../../components/Header/Header'
  import KJFSwiper from './components/KFJSwiper/KFJSwiper'  //轮播图
  import ServeClient from './components/ServeClient/ServeClient' //三行文字
  import ProductClass from './components/ProductClass/ProductClass' //小图标分类
  import OnePic from './components/OnePic/OnePic'  //一张图片
  import NewProduct from './components/NewProduct/NewProduct' //中间四小幅图
  import PersonalTailor from './components/PersonalTailor/PersonalTailor' //中间的轮播图
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    name: "Home",
    
    components:{
      Header,
      KJFSwiper,
      ServeClient,
      ProductClass,
      OnePic,
      NewProduct,
      PersonalTailor,
    },
    computed:{
      ...mapState({
        homeData: state=>state.home.homeData
      })
    },
    async mounted(){
      await this.$store.dispatch('GetHomedatas')
    
    
    },
    watch:{
      homeData(){  //homeData 数据更新了
        this.$nextTick(() => {
          new BScroll('.wrap_home',{
            click: true,
            scrollY: true
          })
        })
      }
    }
  
  
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .wrap_home
    width 100%
    height 1406px
    .content
      width 100%
      height 10000px
</style>
