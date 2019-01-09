import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// import one from '@/components/one'
import one from '../components/one.vue'
import two from '@/components/two'
import three from '@/components/three'
import one1 from '@/components/one1'


const router = new VueRouter({
  routes:[
      {path:'/',redirect:'/one'},
      {path:'/one',component:one},
      {path:'/two',component:two},
      {path:'/three',component:three},
      {path:'/one1',component:one1},
  ]
})

export default router



// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'one,two,three',
//       component: one,two,three
//     }
//   ]
// })
