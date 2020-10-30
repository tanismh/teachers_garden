import Vue from 'vue'
import VueRouter from 'vue-router'

const login = () => import('../components/login') 
const intranet_faculty = () => import('../components/intranet_faculty')
const affairs_faculty = () => import('../components/affairs_faculty')
const announcement_faculty = () => import('../components/announcement_faculty')
const edit_personal_information = () => import('../components/edit_personal_information')
const edit_share_faculty = () => import('../components/edit_share_faculty')
const edu_resources_faculty = () => import('../components/edu_resources_faculty')
const search_faculty = () => import('../components/search_faculty')
const share_faculty = () => import('../components/share_faculty')
const share_manage_faculty = () => import('../components/share_manage_faculty')
const upload_share = () => import('../components/upload_share')
const view_personal_information = () => import('../components/view_personal_information')
const system_document_faculty = () => import('../components/system_document_faculty')


Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
// 重写了原型上的push方法，统一的处理了错误信息
// 解决了路由跳转到相同页面时抛出的错误
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

/* VueRouter.beforeEach((to, from, next) => {
    //to到哪儿 from从哪儿离开 next跳转 为空就是放行 
      if (to.path === '/') {
      //如果跳转为登录，就放行 
      next(); 
      } else {
      //取出localStorage判断
      let token = localStorage.getItem('token');   
      if (token == null || token === '') { 
          console.log('请先登录')  
          next({name: '/login'});
        } else {
          next(); 
        } 
    }
}); */

const routes = [

    { path: '/', redirect: '/login'},
    { path: '/login', component:login},

    { path: '/intranet_faculty', component:intranet_faculty,
      meta : {                      
        requireAuth:true //这个参数 true 代表需要登录才能进入
      }
    },
    
    { path: '/affairs_faculty', component:affairs_faculty,
      meta : {                      
        requireAuth:true //这个参数 true 代表需要登录才能进入
      }
    },

    { path: '/announcement_faculty', component:announcement_faculty,
      meta : {                      
        requireAuth:true //这个参数 true 代表需要登录才能进入
      }
    },

    { path: '/edit_personal_information', component:edit_personal_information,
      meta : {                      
        requireAuth:true //这个参数 true 代表需要登录才能进入
      }
    },

    { path: '/edit_share_faculty', component:edit_share_faculty,
      meta : {                      
        requireAuth:true //这个参数 true 代表需要登录才能进入
      }
    },

    { path: '/edu_resources_faculty', component:edu_resources_faculty,
      meta : {                      
        requireAuth:true //这个参数 true 代表需要登录才能进入
      }
    },

    { path: '/search_faculty', component:search_faculty,
      meta : {                      
        requireAuth:true //这个参数 true 代表需要登录才能进入
      }
    },

    { path: '/share_faculty', component:share_faculty,
      meta : {                      
        requireAuth:true //这个参数 true 代表需要登录才能进入
      }
    },

    { path: '/share_manage_faculty', component:share_manage_faculty,
      meta : {                      
        requireAuth:true //这个参数 true 代表需要登录才能进入
      }
    },

    { path: '/upload_share', component:upload_share,
      meta : {                      
        requireAuth:true //这个参数 true 代表需要登录才能进入
      }
    },

    { path: '/view_personal_information', component:view_personal_information,
      meta : {                      
        requireAuth:true //这个参数 true 代表需要登录才能进入
      }
    },

    { path: '/system_document_faculty', component:system_document_faculty,
      meta : {                      
        requireAuth:true //这个参数 true 代表需要登录才能进入
      }
    }

]


const router = new VueRouter({
    routes: routes,
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
