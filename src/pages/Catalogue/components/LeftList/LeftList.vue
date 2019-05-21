<template>
  <div class="cat_content">
    <div class="left_nav">
      <ul>
        <li @click="toLevel2(index)" v-for="(Titem,index) in categoryData" :key="index"
            :class="{active:categoryData[curIndex]===Titem}"
        >
          {{Titem.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "LeftList",
    data(){
      return{
        curIndex: 0
      }
    },
    computed:{
      ...mapState({
        categoryData: state => state.category.categoryData
      })
    },
    mounted() {
      this.$store.dispatch('getCategoryData')
    },
    methods:{
      toLevel2(index){
        this.curIndex = index
      }
    }
  
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  .cat_content
    width 100%
    font-size 28px
    .left_nav
      position fixed
      top 88px
      left 0
      width 162px
      max-height 1144px
      border-right 1px solid #eee
      >ul
        width 100%
        >li
          width 100%
          height 50px
          margin-top 40px
          line-height 50px
          text-align center
          font-size 28px
          color #7e8c8d
          &:first-child
            margin-top 20px
          &.active
            color $themeColor
            border-left 6px solid $themeColor

</style>
