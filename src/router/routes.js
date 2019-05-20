
import Catalogue from '../pages/Catalogue/Catalogue'
import Discren from '../pages/Discren/Discren'
import Home from '../pages/Home/Home'
import Personal from '../pages/Personal/Personal'
import Shopping from '../pages/Shopping/Shopping'
import Search from '../components/Search/Search'



export default [
  {
    path:'/catalogue',
    component:Catalogue,
    meta: {
      isShowFoot: true
    }

  },
  {
    path:'/discren',
    component:Discren,
    meta: {
      isShowFoot: true
    }
  },

  {
    path:'/home',
    component:Home,
    meta: {
      isShowFoot: true
    }
  },

  {
    path:'/personal',
    component:Personal,
    meta: {
      isShowFoot: false
    }
  },

  {
    path:'/shopping',
    component:Shopping,
    meta: {
      isShowFoot: true
    }
  },
  {
    path:'/search',
    component:Search,
    meta: {
      isShowFoot: false
    }
  },

  //重定向
  {
    path:'/',
    redirect:'/home'
  }


]
