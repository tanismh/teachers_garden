<template>
    <div id="main">
        <div>
            <h1 class="h1">
                学院业务管理系统
            </h1>
        </div>
        <div class="content">       
            <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login_Form">
                <el-form-item class="userName_item"  prop="userName" label="用户名" label-width="80px" >
                    <el-input 
                        placeholder="请输入用户名" 
                        class="userName" 
                        v-model="loginForm.userName"
                    >
                    </el-input>
                </el-form-item>

                <el-form-item class="password_item" prop="password" label="密码" label-width="80px">
                    <el-input
                        placeholder="请输入密码"
                        class="password"
                        type="password"
                        v-model="loginForm.password"
                    ></el-input>
                </el-form-item>

                <el-form-item >
                    <el-radio-group v-model="loginForm.role" class="singleBox"  @change="getRadioVal">
                        <el-radio label="teacher" class="singleBox1" value="teacher" >教职工</el-radio>
                        <el-radio label="2" class="singleBox2" value="sub">子管理</el-radio>
                        <el-radio label="3" class="singleBox3" value="gene">总管理</el-radio>
                    </el-radio-group>
                </el-form-item>

                <el-form-item>
                    <el-button
                    class="btn"
                    type="primary"
                    @click="submitForm('loginForm')"
                    style="font-size: 18px"
                    >登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>   
</template>

<script>
export default {
    name: "Login",
    data () {
        var check = (rule, value, callback) => {
            const username = /[0-9]{10}/;
            const password = /[0-9]{6}/;
            if (username.test(value)) {
                //合法
                return callback();
            }
            callback(new Error("请输入正确的用户名"));
            
            if (password.test(value)) {
                //合法
                return callback();
            }
            callback(new Error("请输入正确的密码"));
        };
        return {
           role:'teacher',
            //表单数据绑定对象
            loginForm: {
                userName: "",
                password: "",    
                role:"",                                                           
            },
            //表单验证规则对象
            loginRules: {
                userName: [
                { required: true, message: "请输入用户名", trigger: "blur" },
                { validator: check, trigger: "blur" }, 
                ],
                password: [{ required: true, message: "请输入密码", trigger: "blur" }],
            },
        };
    },
 
    methods: {
        //获取输入框的内容
        getInput(str){
            const userName = /[0-9]{10}/;
            const password = /[0-9]{6}/;
            str = this.loginForm.userName
            if(userName.test(str)){
                return true;
            } else {
                return false;
            }
        },    
        //获取单选框的内容
        getRadioVal() {
            console.log(this.loginForm);
            // value = this.loginForm.role
            if(this.role){
                return true;
            }else{
                return false;
            }
            //return this.value;
            
        },
        //账号密码登录
        submitForm(loginForm) {
            this.$refs[loginForm].validate((valid) => {
                if (valid) {
                    if(this.getInput(this.loginForm.userName)){
                        this.$api.login.login( {
                            userName: this.loginForm.userName, // 登录名
                            password: this.loginForm.password, // 登录密码
                            role:this.loginForm.role,
                        })
                        .then(res => {
                            this.responseResult = JSON.stringify(res.data)
                            this.msg = JSON.stringify(res.data.msg)
                            //console.log(res.data)
                            if (res.data.code == 200) {
                                this.msg='';
                                //token值，用loaclStorage保存
                                localStorage.setItem('userName',this.loginForm.userName);
                                //获取并存储服务器返回的AuthorizationToken信息
                                /* var token = res.headers['token'];
                                localStorage.setItem('token',token); */
                                //登录成功跳转页面
                                if(this.getRadioVal(this.loginForm.role)){
                                    this.$router.push('/intranet_faculty');
                                }else if(this.getRadioVal(this.loginForm.singleBox2)){
                                    this.$router.push('/intranet_sub');
                                }else{
                                    this.$router.push('/intranet_general');
                                }
                                
                                //alert('登陆成功');
                            }else{
                                alert('登录失败')
                            }
                        }).catch(error => {
                            //alert('账号或密码错误');
                            console.log(error);
                        });
                    }
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
    }
}
</script>

<style lang="less" scoped>
    body{
    background: #f0f5f8;
    margin: 0;
    }
    .h1{
        color: #82bcd2;
        position:relative;
        text-align:center;
        font-size: 50px;
        margin: 30px 30px 30px 150px;
    }

    .content{
        float: left;
        width:655px;
        height:400px;
        position:relative;
        left: 40%;
        top: 20%; 
        margin-left:-200px;
        border:1px;
        background:#f4eef0;
    }
    .login_Form{
        width:400px;
        height:300px;
        position:relative;
        left:50%;
        top:45%;
        margin-left: -200px;
        margin-top:-100px;
    } 
    .userName_item{
        margin: 0 0 20px 0;
        height: 36px;
    }
    .userName{
        width: 280px;
        height: 30px; 
        float: left;
        padding: 0px 1px 0px 1px;
        margin: 0 0 0px 0;
        
    } 
    .password_item{
        margin: 10px 0 0 0;
        height: 36px;
        
    }
    .password{
        width: 280px;
        height: 36px; 
        float: left;
        padding: 0px 1px 10px 1px;
        margin: 0 0 0px 0;
    } 
    .singleBox{
        float: left;
        width: 100%;
        margin:40px 10px 10px 20px;
    }
    .singleBox1{
        padding: 10px;
        width: 18%;
        float: left;
        
    }
    .singleBox2{
        padding: 10px;
        width: 18%;
        float: left;
    }
    .singleBox3{
        padding: 10px;
        width: 18%;
        float: left;
    }

    .btn{
        width: 350px;
        height: 40px; 
        color: #ffffff; 
        font-size: 18px;
        background-color: #81BED7 ; 
        border-radius:5px; 
        border: 2px solid #81BED7;
        margin: 5px 5px 5px 20px;
    }
</style>
