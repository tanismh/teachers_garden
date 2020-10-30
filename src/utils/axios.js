import axios from 'axios'   //引入 axios
import qs from 'qs'; // 引入qs模块，用来序列化post类型的数据，某些请求会用得到
import { Message } from 'element-ui'    //引入 element-ui 的 Message 模块，用于信息提示


// create an axios instance   创建axios实例
const instance = axios.create({
    baseURL: process.env.BASE_API, // api 的 base_url
    timeout: 5000, // request timeout  设置请求超时时间
    responseType: "json",
    method:"post",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    }
  })
// 先导入vuex,因为我们要使用到里面的状态对象
// vuex的路径根据自己的路径去写
//import store from '@/store/store';

// 请求拦截器
instance.interceptors.request.use(    
    config => {        
        if (config.method === "post") {
            // 序列化
            //config.data = qs.stringify(config.data);
            config.data = JSON.stringify(config.data);
            // 温馨提示,若是贵公司的提交能直接接受json 格式,可以不用 qs 来序列化的
        }
          
        return config;    
    },    
    error => {        
        // 对请求错误做些什么，自己定义
        Message({                  //使用element-ui的message进行信息提示
            showClose: true,
            message: error,
            type: "warning"
        });
        return Promise.reject(error);
        //return Promise.error(error);    
    });

// 响应拦截器
instance.interceptors.response.use(    
    response => {   
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据     
        // 否则的话抛出错误
        if (response.status === 200) {            
            return Promise.resolve(response);        
        } else {            
            return Promise.reject(response);        
        }    
    },    
    // 服务器状态码不是2开头的的情况
    // 这里可以跟你们的后台开发人员协商好统一的错误状态码    
    // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
    // 下面列举几个常见的操作，其他需求可自行扩展
    error => {            
        if (error.response.status) {            
            switch (error.response.status) {                
                // 401: 未登录
                // 未登录则跳转登录页面，并携带当前页面的路径
                // 在登录成功后返回当前页面，这一步需要在登录页操作。                
                case 401:                    
                    router.replace({                        
                        path: '/login',                        
                        query: { 
                            redirect: router.currentRoute.fullPath 
                        }
                    });
                    break;

                // 403 token过期
                // 登录过期对用户进行提示
                // 清除本地token和清空vuex中token对象
                // 跳转登录页面                
                case 403:
                    Message({
                        message: '登录过期，请重新登录',
                        duration: 1000,
                        forbidClick: true
                    });
                    // 清除token
                    localStorage.removeItem('token');
                    store.commit('loginSuccess', null);
                    // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面 
                    setTimeout(() => {                        
                        router.replace({                            
                            path: '/login',                            
                            query: { 
                                redirect: router.currentRoute.fullPath 
                            }                        
                        });                    
                    }, 1000);                    
                    break; 

                // 404请求不存在
                case 404:
                    Message({
                        message: '网络请求不存在',
                        duration: 1500,
                        forbidClick: true
                    });
                    break;
                // 其他错误，直接抛出错误提示
                default:
                    Message({
                        message: error.response.data.message,
                        duration: 1500,
                        forbidClick: true
                    });
            }
            return Promise.reject(error.response);
        }
    }    
);

//设置axios请求头加入token
instance.interceptors.request.use(config => { 
    if (config.push === '/') {
    } else { 
      if (localStorage.getItem("token")) { 
        //在请求头加入token，名字要和后端接收请求头的token名字一样 
        config.headers.token=localStorage.getItem("token");  
        config.headers['content-type'] = 'application/json';
      } 
    } 
    return config; 
    }, 
    error => { 
      return Promise.reject(error);
  });
  
   //响应回来token是否过期
   axios.interceptors.response.use(response => { 
    console.log('响应回来：'+response.data.code) 
    //和后端token失效返回码约定403 
    if (response.data.code == 403) {
      // 引用elementui message提示框  
      ElementUI.Message({  
        message: '身份已失效', 
        type: 'err' 
      });
      //清除token 
      localStorage.removeItem('token ');
      //跳转  
      router.push('/login'); 
    } else { 
        return response 
    } 
  }, 
  error => { 
     return Promise.reject(error); 
  })
  
  //自动给同一个vue项目的所有请求添加请求头
  instance.interceptors.request.use(function (config) {
    let token = localStorage.getItem('token');
    if (token) {
    config.headers['token'] = token;
    }
    return config;
   })

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(params))
        .then(res => {
            resolve(res.data);
        })
        .catch(err =>{
            reject(err.data)
        })
    });
}

export default instance;