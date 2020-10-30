<template>
    <div id="main">
        <div class="school_badge">
            <img src="./school_badge.jpg" style="width: 90px; height: 90px;">
        </div>
        <div class="name">
            <h1>计算机与信息工程学院</h1>
            <p>SCHOOL OF COMPUTER AND INFORMATION ENGINEERING</p>
        </div>
        
        <div class="box">
            <input type="search" name="searchbox" placeholder="请输入关键字" style="width: 150px;">
            <button class="search_btn" ><img src="search.jpg" alt=""></button>
        </div>
    
    
        <div class="button">
            <button ><a href="#">外网首页</a></button>
            <button ><a href="#">内网首页</a></button>
            <button ><a href="#">事务通知</a></button>
            <button ><a href="#">公示公告</a></button>
            <button ><a href="#">制度文件</a></button>
            <button ><a href="#">财政信息</a></button>
            <button ><a href="#">教学资源</a></button>
            <button ><a href="#">共享资料</a></button>
            <button ><a href="#">个人信息</a></button>
        </div>
    
        <div class="content">
            <div class="ssnr">
                <h2>个人信息修改</h2>
            </div>
    
            <div class="return"><button ><a href="#">确认修改</a></button></div>
            <div class="qrxg"><button ><a href="#">返回</a></button></div>
    
            <div class="list">
                <!-- <el-form ref="editInformationForm" :model="editInformationForm" :rules="editInformationRules" class="line">
                    <div class="div1"><e><h3>姓名:</h3></e></div>
                    <el-form-item class="div2"  prop="nameline" >
                        <el-input 
                            class="div3" 
                            v-model="editInformationForm.nameline"
                        >
                        </el-input>
                    </el-form-item>

                    <el-form-item class="div2" prop="workIDline">
                        <div class="div1"><e><h3>工号:</h3></e></div>
                        <el-input
                            class="div3"
                            v-model="editInformationForm.workIDline"
                        ></el-input>
                    </el-form-item>

                    <el-form-item class="div2" prop="workline">
                        <div class="div1"><e><h3>职位:</h3></e></div>
                        <el-input
                            class="div3"
                            v-model="editInformationForm.workline"
                        ></el-input>
                    </el-form-item>

                    <el-form-item class="div2" prop="workdayline">
                        <div class="div1"><e><h3>入职日期:</h3></e></div>
                        <el-input
                            class="div3"
                            v-model="editInformationForm.workdayline"
                        ></el-input>
                    </el-form-item>

                    <el-form-item class="div2" prop="passwordline">
                        <div class="div1"><e><h3>密码:</h3></e></div>
                        <el-input
                            class="div3"
                            v-model="editInformationForm.passwordline"
                        ></el-input>
                    </el-form-item>

                    <el-form-item class="div2" prop="phonelline">
                        <div class="div1"><e><h3>电话长号:</h3></e></div>
                        <el-input
                            class="div3"
                            v-model="editInformationForm.phonelline"
                        ></el-input>
                    </el-form-item>

                    <el-form-item class="div2" prop="phonesline">
                        <div class="div1"><e><h3>电话短号:</h3></e></div>
                        <el-input
                            class="div3"
                            v-model="editInformationForm.phonesline"
                        ></el-input>
                    </el-form-item>

                    <el-form-item class="div2" prop="mailline">
                        <div class="div1"><e><h3>邮箱:</h3></e></div>
                        <el-input
                            class="div3"
                            v-model="editInformationForm.mailline"
                        ></el-input>
                    </el-form-item>

                    <el-form-item class="div2" prop="dingline">
                        <div class="div1"><e><h3>钉钉:</h3></e></div>
                        <el-input
                            class="div3"
                            v-model="editInformationForm.wordinglinekIDline"
                        ></el-input>
                    </el-form-item>

                    <el-form-item class="div2" prop="WeChatline">
                        <div class="div1"><e><h3>微信:</h3></e></div>
                        <el-input
                            class="div3"
                            v-model="editInformationForm.WeChatline"
                        ></el-input>
                    </el-form-item>

                    <el-form-item >
                        <div class="div1"><e><h3>性别:</h3></e></div>
                        <el-radio-group v-model="editInformationForm.sex" class="div1"  @change="getSex">
                            <el-radio label="male" class="div4" value="male" >男</el-radio>
                            <el-radio label="female" class="div5" value="female">女</el-radio>
                        </el-radio-group>
                    </el-form-item>

                    <el-form-item>
                        <el-button
                        class="btn"
                        type="primary"
                        @click="submitForm('editInformationForm')"
                        style="font-size: 18px"
                        >登录</el-button>
                    </el-form-item>
                </el-form>        --> 
        </div> 
    
        <div class="bottom">
            <div class="ztlm">
                <h3>专题栏目</h3>
                <a href="#">>学生科技</a>
                <a href="#">>在线教学</a>
                <a href="#">>实验管理</a>
                <a href="#">>毕业设计</a>
            </div>
            <div class="ptjs">
                <h3>平台建设</h3>
                <a href="#">>学生科技</a>
                <a href="#">>在线教学</a>
                <a href="#">>实验管理</a>
                <a href="#">>毕业设计</a>
            </div>
            <div class="kslj">
                <h3>快速链接</h3>
                <a href="#">>学生科技</a>
                <a href="#">>在线教学</a>
                <a href="#">>实验管理</a>
                <a href="#">>毕业设计</a>
            </div>
            <div class="lxfs">
                <h3>联系方式</h3>
                <p>地址: 浙江杭州下沙高教园区学正街18号 <br> 
                    电话：(86)0571-28008316<br>
                    邮箱：scie@zjgsu.edu.cn<br>
                    <br>
                    Copyright @ 1997-2005 浙江工商大学<br>
                    <br>
                    浙公网安备 33011802000512号<br>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    /* data(){
        var check = (rule, value, callback) => {
            const nameline = /[0-9]{10}/;
            const workIDline = /[0-9]{6}/;
            const workline = /[0-9]{6}/;
            const workdayline = /[0-9]{6}/;
            const passwordline = /[0-9]{6}/;
            const phonelline = /[0-9]{6}/;
            const phonesline = /[0-9]{6}/;
            const mailline = /[0-9]{6}/;
            const dingline = /[0-9]{6}/;
            const WeChatline = /[0-9]{6}/;
            if (nameline.test(value)) {
                //合法
                return callback();
            }
            callback(new Error("请输入正确的姓名"));

            if (workIDline.test(value)) {
                //合法
                return callback();
            }
            callback(new Error("请输入正确的工号"));

            if (workline.test(value)) {
                //合法
                return callback();
            }
            callback(new Error("请输入正确的职位"));

            if (workdayline.test(value)) {
                //合法
                return callback();
            }
            callback(new Error("请输入正确的入职日期"));

            if (passwordline.test(value)) {
                //合法
                return callback();
            }
            callback(new Error("请输入正确的密码"));

            if (phonelline.test(value)) {
                //合法
                return callback();
            }
            callback(new Error("请输入正确的长号"));

            if (phonesline.test(value)) {
                //合法
                return callback();
            }
            callback(new Error("请输入正确的短号"));

            if (mailline.test(value)) {
                //合法
                return callback();
            }
            callback(new Error("请输入正确的邮箱"));

            if (dingline.test(value)) {
                //合法
                return callback();
            }
            callback(new Error("请输入正确的钉钉"));

            if (WeChatline.test(value)) {
                //合法
                return callback();
            }
            callback(new Error("请输入正确的微信"));
            
        };
        return {
            //表单数据绑定对象
            editInformationForm: {
                userName: "",
                password: "",    
                role:"",                                                           
            },
            //表单验证规则对象
            editInformationRules: {
                userName: [
                { required: true, message: "请输入用户名", trigger: "blur" },
                { validator: check, trigger: "blur" }, 
                ],
                password: [{ required: true, message: "请输入密码", trigger: "blur" }],
            },
        };

    },
    methods:{
        //获取输入框的内容
        getInput(str){
            const nameline = /[0-9]{10}/;
            const workIDline = /[0-9]{6}/;
            const workline = /[0-9]{6}/;
            const workdayline = /[0-9]{6}/;
            const passwordline = /[0-9]{6}/;
            const phonelline = /[0-9]{6}/;
            const phonesline = /[0-9]{6}/;
            const mailline = /[0-9]{6}/;
            const dingline = /[0-9]{6}/;
            const WeChatline = /[0-9]{6}/;
            str = this.editInformationForm.userName
            if(userName.test(str)){
                return true;
            } else {
                return false;
            }
        },    

    } */
    
}
</script>

<style lang="less" scoped>
    .content{
        float: left;
        width: 98%;
        height: 620px;
        margin: 20px 10px 10px 10px;
        background: #F2F2F2;
    }
    h2{
        float: left;
        width: 50%;
        font-size: 28px;
        color: #027DB4;
        margin: 20px 40px;
        margin-bottom: 15px;
    }

    .list{
        float: left;
        width: 95%;
        margin-left: 80px;
    }

    .return button{
        float: right;
        background-color: #169BD5;
        width: 100px;
        height: 30px;
        margin: 30px 50px 0 0;
        padding: 0;
        border: 0;
        text-align: center;
        border-radius: 5px;
    }

    .return a{

        color: #ffffff;
        display: block;
        font-size: 20px;
        text-decoration: none;
    }

    .qrxg button{
        float: right;
        background-color: #169BD5;
        width: 100px;
        height: 30px;
        margin: 30px 10px ;
        padding: 0;
        border: 0;
        text-align: center;
        border-radius: 5px;
    }

    .qrxg a{
        color: #ffffff;
        display: block;
        font-size: 20px;
        text-decoration: none;
    }


    .div1{
        float: left;
        width: 98px;
        height: 25px;
        margin: 10px ;
    }

    .div1 h3{
        float: left;
        color: #7F7F7F;
        width: 98px;
        margin: 0;
    }

    .div1 e{
        letter-spacing:18px;
    }

    .div2{
        float: left;
        width: 85%;
        height: 25px;
        margin: 10px;
    }
    .div3{
        width: 336px;
        height: 20px;
    }

    .div4{
        float: left;
        height: 25px;
        margin: 10px;  
    }

    .div5{
        float: left;
        height: 25px;
        margin: 10px;   
    }
</style>