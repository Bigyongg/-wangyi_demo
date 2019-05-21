<template>
  <div class="right_content">
    <img alt="WapBanner">
    <ul>
      <li v-for=" (Iitem,index) in categoryData">
        <div>
          <img >
          <div></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "RightList",
    computed:{
      ...mapState({
        categoryData: state => state.category.categoryData
      })
    },
    mounted(){
      this.$store.dispatch('getCategoryData')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .right_content
    float right
    width 588px
    box-sizing border-box
    padding 15px 30px 100px
    font-size 28px
    >img
      width 528px
      height 192px
      background-color: #fff
    >ul
      width 528px
      margin-top 20px
      display flex
      flex-wrap wrap
      >li
        width 144px
        height 216px
        margin-right 32px
        >div
          >img
            width 144px
            height 144px
          >div
            width 144px
            height 72px
            text-align center
</style>
