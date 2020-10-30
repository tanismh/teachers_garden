export default {
    data: function () {
            return {
              name:'',
              token:''
            }
    },
    
    created(){
    	//页面加载时就从本地通过localstorage获取存储的token值
        this.token =  localStorage.getItem('token')
    },
     mounted() {
        this.$axios({
        	method: 'get',
        	url: '/api/v1/user',
        	headers: {
            	'Content-Type': "application/json;charset=UTF-8",
            	//把token放到请求头才能请求，这里的'Bearer '表示是后台希望更加的安全，依据后台给的信息看到底是加还是不加
            	'Authorization': 'Bearer ' + this.token,
        	}
      	})
      	.then(res=>{                    //请求成功后执行函数
        if(res.data.code === 200){
          //请求成功之后给用户名赋值
          this.name=res.data.data.username
          console.log("登录成功")
          this.$router.push('/login.vue')
        }else{
          console.log("登录失败")
        }
      })
      .catch(err=>{                   //请求错误后执行函
        console.log("请求错误")
      })
        },
}