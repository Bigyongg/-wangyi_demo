<template>
  <!--私人订制-->
  <div class="personal_shop">
    <div class="personal_shop_title">私人订制</div>
    <div class="personal_shop_swiper_box">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(personalShop, index) in personalShopArr" :key="index">
            <div class="personalShop-item" v-for="(good ,index) in personalShop" :key="index">
              <img class="primaryPic"  :src="good.primaryPicUrl" :alt="good.name">
              
              <div class="text">
                <span class="name">{{good.name}}</span>
                <span class="price">¥{{good.retailPrice}}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper"
  import {mapState} from 'vuex'
  export default {
    name: "PersonalTailor",
    computed:{
      ...mapState({
        homeData: state => state.home.homeData
      }),
      personalShopArr () {
        let arr3 = []
        console.log(arr3 + '------')
        if(this.homeData.personalShop){
          this.homeData.personalShop.reduce((arr, shop)=>{
            arr.push(shop)
            if(arr.length === 3){
              arr3.push(arr)
              arr = []
              console.log(arr)
            }
            return arr
          }, [])
        }
        return arr3
      }
  
    },
    watch: {
      personalShopArr (newArr) {
        this.$nextTick(()=>{
          if(!this.pShopSwiper
            && this.homeData
            && newArr.length*newArr[0].length === this.homeData.personalShop.length
          ){
            this.pShopSwiper = new Swiper('.personal_shop_swiper_box .swiper-container', {
              loop: true,
              pagination: {
                el: '.personal_shop_swiper_box .swiper-pagination',
                clickable: true,
              },
            });
          }
        })
      }
    },
    
    async mounted(){
      await this.$store.dispatch('GetHomedatas')
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  .personal_shop
    margin-bottom 80px
    .personal_shop_title
      width 100%
      height 100px
      line-height 100px
      font-size 32px
      padding 0 30px
      background #fff
      overflow hidden
    .personal_shop_swiper_box
      .swiper-container
        overflow inherit
        .swiper-pagination
          transform translateY(45px)
        .personalShop-item
          float left
          width 210px
          padding 0 !important
          margin-left 20px
          .primaryPic
            background-color #f5f5f5
            margin-bottom 12px
            width 216px
            height 216px
          >div
            margin-top 0
            margin-bottom 10px
            font-size 24px
            overflow visible
            white-space normal
            line-height 36px
            .name
              width 216px
              color #333
              margin-top 0
              margin-bottom 10px
              font-size 24px
              line-height 36px
              white-space normal
            .price
              font-size 22.5px
              color #b4282d
</style>
