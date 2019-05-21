<template>
  <div class="app">
    
    <router-view />
    <FooterNav v-show="$route.meta.isShowFoot"/>

  </div>
</template>

<script>
  import Header from './components/Header/Header'
  import FooterNav from './components/FooterNav/FooterNav'
  
  export default {
    name: "App",
    data(){
      return{
        flag:''
      }
    },
    components:{
      FooterNav,
      Header,
    }
  
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*.app*/
    /*height 10000px*/
  .my_split:before    /* 灰色顶部分割线 */
    content ""
    display block
    width 100%
    height 18px
    border-top 1px solid rgba(7, 17, 27, 0.1)
    border-bottom 1px solid rgba(7, 17, 27, 0.1)
    background-color: #f3f5f7
  
  .line_two_point    /* 第二行出现省略号 */
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  input::-webkit-input-placeholder,
  input:-moz-placeholder,
  input::-moz-placeholder,
  input:-ms-input-placeholder
    color #f00
    font-size 28px
</style>
