<template>
	<div>
    <Header />
    <KJFSwiper />
    <ServeClient />
    <ProductClass />
  </div>
</template>

<script>
  import Header from '../../components/Header/Header'
  import KJFSwiper from './components/KFJSwiper/KFJSwiper'  //轮播图
  import ServeClient from './components/ServeClient/ServeClient' //三行文字
  import ProductClass from './components/ProductClass/ProductClass' //小图标分类
  export default {
    name: "Home",
    components:{
      Header,
      KJFSwiper,
      ServeClient,
      ProductClass
    }
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
