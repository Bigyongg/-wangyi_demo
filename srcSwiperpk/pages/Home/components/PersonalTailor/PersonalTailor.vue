<template>
	<!--私人订制-->
  <div>
    <p>私人订制</p>
    
    
    
  </div>
</template>

<script>
  import Swiper from "swiper"
  export default {
    name: "PersonalTailor",
    mounted(){
    
      var mySwiper = new Swiper('.top_swiper .swiper-container', {
        autoplay: true,//可选选项，自动滑动
        loop: true,
        pagination: {
          el: '.top_swiper .swiper-pagination',
        }
      
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
