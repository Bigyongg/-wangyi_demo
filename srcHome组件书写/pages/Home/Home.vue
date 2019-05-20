<template>
	<div>
    <Header />
    <KJFSwiper />
    <ServeClient />
    <ProductClass  />
    <OnePic />
    <NewProduct />
    <PersonalTailor />
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
    
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
