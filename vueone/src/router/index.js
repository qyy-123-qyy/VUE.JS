import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import page from '@/components/page'
import work from '@/components/work'
import first from '@/components/first'
import datalist from '@/components/datalist'
import sort from '@/components/sort'

const User={
  template:`
    <div> 
    <h3><font color="plum">我是父组件{{$route.params.id}}</font></h3>
    <router-view/>
    </div> `
}
const profile={
  template:`
  <div> 
     <h3><font color="plum">我是profile子组件</font></h3>
     <router-view/>
    </div> `
}
const posts={
  template:`
  <div>
     <h3><font color="plum">我是posts子组件</font></h3> 
     <router-view/>
    </div>`
}
const NotFound={
  template:`
  <div> 
     <h3><font color="red">404你访问的页面不存在</font></h3>
     <router-view/>
    </div> `
}
Vue.use(Router)

export default new Router({
  mode:'history',
  linkExactActiveClass:'actives',
  routes: [
    {
      path: '/',//根路径
      redirect:"/page",
      // name: 'HelloWorld',
      // component: HelloWorld
    },
    {
      path:'/page',
      name:'page',
      component:page
    },
    {
      path:'/work',
      name:'work',
      component:work
    },
    {
      path:'/sort',
      name:'sort',
      component:sort
    },
    {
      path:'/first/:id',
      name:'first',
      component:first,
    },
    {
      path:'/user/:id',
      name:'User',
      component:User,
      children:[
    {
      path:'profile',
      name:'profile',
      component:profile,
    },
    {
      path:'/posts',
      name:'posts',
      component:posts,
    }
  ]
 },
 //路由的重定向，表示将你原来在转发列表中发向路由的路径改成另一条路由的路径，你的数据会存到另一路由的服务器上
/*  {
   path:"*",//除了上面的所有
  //  component:NotFound,
  redirect:(to)=>{
    console.log(to);
    if(to.path==="/aaa"){
      return "/page";
    }else if(to.path==="/bbb"){
      return "/work";
    }else{
      return "/";
    }
  }
 } */
 {
  path:'/datalist',
  name:'datalist',
  component:datalist,
 }
]
})
