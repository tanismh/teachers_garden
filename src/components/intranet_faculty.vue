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
            <button ><a href="http://localhost:8080/affairs_faculty">事务通知</a></button>
            <button ><a href="http://localhost:8080/announcement_faculty">公示公告</a></button>
            <button ><a href="http://localhost:8080/system_document_faculty">制度文件</a></button>
            <button ><a href="#">财政信息</a></button>
            <button ><a href="http://localhost:8080/edu_resources_faculty">教学资源</a></button>
            <button ><a href="http://localhost:8080/share_faculty">共享资料</a></button>
            <button ><a href="#">个人信息</a></button>
        </div>
        <div class="content">
            <div class="swtz">
                <div class="point" ></div>
                <h2>事务通知</h2>
                <div class="more"><a href="http://localhost:8080/affairs_faculty">更多>></a></div>      
                <div class="alist">
                    <ul>
                        <li>
                            <p>2020-08-20</p>
                            <a href="#"> 计算机与信息工程学院2021届本科生推荐免试攻读硕士学位研究生遴选名单预排序公示</a>
                        </li>
                        <li>
                            <p>2020-08-20</p>
                            <a href="#"> 信息学院2019年度非毕业班素质测评基础数据的公示通知</a>
                        </li>
                        <li>
                            <p>2020-08-20</p>
                            <a href="#"> 关于做好2019年度非毕业班学生素质评价及评奖评优工作的通知</a>
                        </li>
                        <li>
                            <p>2020-08-20</p>
                            <a href="#"> 关于做好推荐2021届优秀本科毕业生免试攻读硕士学位研究生工作的通知</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="gsgg">
                <div class="point" ></div>
                <h2>公示公告</h2>
                <div class="more"><a href="http://localhost:8080/announcement_faculty">更多>></a></div> 
                <div class="alist">
                    <ul>
                        <li>
                            <p>2020-08-20</p>
                            <a href="#"> 计算机与信息工程学院2021届本科生推荐免试攻读硕士学位研究生遴选名单预排序公示</a>
                        </li>
                        <li>
                            <p>2020-08-20</p>
                            <a href="#"> 信息学院2019年度非毕业班素质测评基础数据的公示通知</a>
                        </li>
                        <li>
                            <p>2020-08-20</p>
                            <a href="#"> 关于做好2019年度非毕业班学生素质评价及评奖评优工作的通知</a>
                        </li>
                        <li>
                            <p>2020-08-20</p>
                            <a href="#"> 关于做好推荐2021届优秀本科毕业生免试攻读硕士学位研究生工作的通知</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="dlxx">
                <div class="point" ></div>
                <h2>登录信息</h2>
                <div class="xx">
                        <!-- <el-table
                            :data="tableInformation"
                            style="width: 100%;height:80px" >
                            <el-table-column
                                prop="name"
                                label="姓名："
                                width="50%"
                                
                                >
                            </el-table-column>
                        </el-table>
                        <el-table>
                            <el-table-column
                                prop="name"
                                label="职位："
                                width="180">
                            </el-table-column>
                        </el-table>
                        <el-table>
                            <el-table-column
                                prop="address"
                                label="登录时间：">
                            </el-table-column>
                        </el-table> -->

                    <!-- <table border=0 >
                        <tbody>
                            <tr>
                                <td ><span>姓名</span></td>
                            </tr>
                        </tbody>
                    </table>
                    <table border=0 >
                        <tbody>
                            <tr>
                                <td ><span>职位</span></td>
                            </tr>
                        </tbody>
                    </table>
                    <table border=0 >
                        <tbody>
                            <tr>
                                <td ><span>登录时间</span></td>
                            </tr>
                        </tbody>
                    </table> -->

                    <table class="tb">
                        <tr>
                            <th><span>姓名：</span></th>
                        </tr>
                        <tr>
                            <th><span>职位：</span></th>
                        </tr>
                        <tr>
                            <th><span>登录时间：</span></th>
                        </tr>
                        <tr v-for="(item,index) in 1" :key="index">
                            <td>{{item.teacherName}}</td>
                            <td>{{item.jobNumber}}</td>
                            <td>{{item.date }}</td>
                        </tr> 
                        <!-- 动态生成内容tr -->
                    </table>
                </div>
                <a href="#">>修改信息</a>
                <a href="http://scie.zjgsu.edu.cn/">>注销登录</a>
            </div>
            <div class="jxzy">
                <div class="point" ></div>
                <h2>教学资源</h2>
                <div class="more"><a href="http://localhost:8080/edu_resources_faculty">更多>></a></div> 
                <div class="jx" >
                    <ul>
                        <li><a href="#">培养方案</a></li>
                        <li><a href="#">课程大纲</a></li>
                        <li><a href="#">教师授课表</a></li>
                    </ul>
                </div>
            </div>
            <div class="zdwj">
                <div class="point" ></div>
                <h2>制度文件</h2>
                <div class="more"><a href="http://localhost:8080/system_document_faculty">更多>></a></div> 
                <div class="alist">
                    <ul>
                        <li>
                            <p>2020-08-20</p>
                            <a href="#"> 计算机与信息工程学院2021届本科生推荐免试攻读硕士学位研究生遴选名单预排序公示</a>
                        </li>
                        <li>
                            <p>2020-08-20</p>
                            <a href="#"> 信息学院2019年度非毕业班素质测评基础数据的公示通知</a>
                        </li>
                        <li>
                            <p>2020-08-20</p>
                            <a href="#"> 关于做好2019年度非毕业班学生素质评价及评奖评优工作的通知</a>
                        </li>
                        <li>
                            <p>2020-08-20</p>
                            <a href="#"> 关于做好推荐2021届优秀本科毕业生免试攻读硕士学位研究生工作的通知</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="czxx">
                <div class="point" ></div>
                <h2>财政信息</h2>
                <div class="more"><a href="#">更多>></a></div> 
                <div class="alist">
                    <ul>
                        <li>
                            <p>2020-11-01</p>
                            <a href="#"> 您2020年10月份的财政信息已更新，点击查看</a>
                        </li>
                        <li>
                            <p>2020-10-01</p>
                            <a href="#"> 您2020年9月份的财政信息已更新，点击查看</a>
                        </li>
                        <li>
                            <p>2020-09-01</p>
                            <a href="#"> 您2020年8月份的财政信息已更新，点击查看</a>
                        </li>
                        <li>
                            <p>2020-08-01</p>
                            <a href="#"> 您2020年7月份的财政信息已更新，点击查看</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="gxzl">
                <div class="point" ></div>
                <h2>共享资料</h2>
                <div class="more"><a href="http://localhost:8080/share_faculty">更多>></a></div> 
                <div class="gxlist">
                    <ul>
                        <li>
                            <a href="#"> 2019年创新项目一览表</a>
                        </li>
                        <li>
                            <a href="#"> 2019年信息学院本科生公开发表论文情况</a>
                        </li>
                        <li>
                            <a href="#"> 2018年创新项目一览表</a>
                        </li>
                        <li>
                            <a href="#"> 2018年信息学院本科生公开发表论文情况</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="bottom">
            <div class="ztlm">
                <h3>专题栏目</h3>
                <a href="#">> 学生科技</a>
                <a href="#">> 在线教学</a>
                <a href="#">> 实验管理</a>
                <a href="#">> 毕业设计</a>
            </div>
            <div class="ptjs">
                <h3>平台建设</h3>
                <a href="#">> 国际级虚拟仿真中心</a>
                <a href="#">> 省部级平台</a>
                <a href="#">> 软件项目管理平台</a>
            </div>
            <div class="kslj">
                <h3>快速链接</h3>
                <a href="#">> 人才引进</a>
                <a href="#">> 办事指南</a>
                <a href="#">> 文件下载</a>
            </div>
            <div class="lxfs">
                <h3>联系方式</h3>
                <p>地址: 浙江杭州下沙高教园区学正街18号 <br> 
                    电话：(86)0571-28008316<br>
                    邮箱：scie@zjgsu.edu.cn
                    <!-- <a href="mailto:scie@zjgsu.edu.cn">scie@zjgsu.edu.cn</a> -->
                </p>
                <p>
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
    name: "Information",
    data(){    
        return{
            teacherName:"",
            jobNumber:"",
            date:""
        }
    },
    methods:{    
        mounted () {
            // 页面一加载完成就执行getTeacherInfo方法
            this.getTeacherInfo();
        },
        //获取数据
        getTeacherInfo(){
            //获取列表
            let params = {
                teacherName:this.teacherName,
                jobNumber:this.jobNumber,
                date:this.date,
            };
            console.log(params);
            this.$http.post('http://47.97.97.208:8082/ssm_learning/getTeacherInfo',params)
            .then(doc => {
                var code = doc.data.status;
                var msg = doc.data.msg;
                if (code == 200){
                    //token值，用loaclStorage保存
                    localStorage.setItem('userName',this.loginForm.userName);
                    //获取并存储服务器返回的AuthorizationToken信息
                    var token = res.headers['token'];
                    localStorage.setItem('token',token);
                    //请求成功，可以根据不同的状态码返回值做出相应的动作
                    this.teacherName = doc.data.data.teacherName;
                    this.jobNumber = doc.data.data.jobNumber;
                    this.date = doc.data.data.date;
                }			
            })
        },
        getTaskData:function(){
            this.$http.post('http://47.97.97.208:8082/ssm_learning/getTeacherInfo',params)
            .then(doc => {
                if(doc.data.data){//当有数据传来时才可获取。若是为空，则在传来的data下再次.xxx寻找结构中的子变量则会出错。
                    this.taskData=doc.data.data;//所谓的整体大数组，包含了所有传来的数据
                    this.defaultChecked=this.taskData.finish;//细分传来的数据结构并放入已声明过的变量
                    this.taskRemarks=this.taskData.remarks;   
                }                  
                else
                    this.taskData=null;
            }).catch(err=>{//处理错误的写法
                this.$alert("未知错误", "false");  //服务器还没搭起来
            })                
        },
        
        
    }
}
</script>

<style lang="less" scoped>
    h2{
    float: left;
    margin: 0;
    padding: 0;
    font-size: 18px;
    color: #027DB4;
    }
    .swtz{
        float: left;
        width: 37%;
        height: 230px;
        margin: 20px 10px 10px 10px;
        background: #F2F2F2;
    }
    .gsgg{
        float: left;
        width: 37%;
        height: 230px;
        margin: 20px 10px 10px 10px;
        background: #F2F2F2;
    }
    .dlxx{
        float: left;
        width: 20%;
        height: 160px;
        margin: 20px 10px 10px 10px;
        background: #F2F2F2;
    }
    .dlxx h2{
        float: left;
        width: 80%;
    }
    .dlxx a{
        float: left;
        font-size: 16px;
        margin-right: 20px;
        /* 去掉下划线 */
        text-decoration: none;
        color: #169BD5;
    }
    .xx{
        float: left;
        margin: 0;
        width: 100%;
        height: 60%;
    }
    .xx span{
        color: #555555;
        font-size: 14px;
        margin: 10px;
    }
    .jxzy{
        float: right;
        width: 20%;
        height: 110px;
        margin: 10px;
        background: #F2F2F2;
    }

    .jx ul{
        padding: 30px 0 0 30px;
        margin: 0;
    }
    .jx a{
        /* 去掉下划线 */
        text-decoration: none;
        display: block;
        color: #555555;
    }
    .zdwj{
        float: left;
        width: 37%;
        height: 230px;
        margin: 10px;
        background: #F2F2F2;
    }
    .czxx{
        float: left;
        width: 37%;
        height: 230px;
        margin: 10px ;
        background: #F2F2F2;
    }
    .gxzl{
        float: left;
        width: 20%;
        height: 170px;
        margin: 10px;
        background: #F2F2F2;
    }
    .point{
        float: left;
        margin: 10px;
        width:10px;
        height:10px;
        border-radius:50%;
        background-color:#027DB4;
    }
    .alist ul{
        padding: 10px 0 0 40px;
    }
    .alist a{
        color: #797979;
        display: block;
        width: 72%;
        font-size: 14px;
        /* 去掉下划线 */
        text-decoration: none;
    }
    .alist p{
        float: right;
        font-size: 11px;
    }
    .alist li{
        border-bottom: 1px solid #81BED7;
    }
    .gxlist ul{
        padding: 10px 0 0 30px;
    }
    .gxlist a{
        color: #797979;
        display: block;
        width: 90%;
        font-size: 14px;
        /* 去掉下划线 */
        text-decoration: none;
    }
    .more a{
        /* 去掉下划线 */
        text-decoration: none;
        float: right;
        color: #027DB4;
    }
    /*设置鼠标移入效果*/
    .content a:hover{
    color: #81BED7;
    }
</style>