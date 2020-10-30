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
            <div class="swgl">
                <h2>共享资料</h2>
            </div>
    
            <div class="upload">
                <button><a href="#">上传</a></button>
            </div>
        
            <div class="manage">
                <button><a href="#">管理</a></button>
            </div>
    
            <div class="list">
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

            <div class="check">
                <input type="checkbox" name="check" id="check">只看自己发布
            </div>

            <div class="flip">
                <button><a href="">上一页</a></button>
                <button><a href="">下一页</a></button>
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

<script >
export default {
    
}
</script>

<style lang="less" scoped>
    .content{
    float: left;
    width: 98%;
    height: 555px;
    margin: 20px 10px 10px 10px;
    background: #F2F2F2;
    }
    h2{
        float: left;
        width: 50%;
        font-size: 35px;
        color: #027DB4;
        margin: 20px 40px;
    }
    .upload button{
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
    .upload a{
        color: #ffffff;
        display: block;
        font-size: 20px;
        text-decoration: none;
    }  
    .manage button{
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
    .manage a{
        color: #ffffff;
        display: block;
        font-size: 20px;
        text-decoration: none;
    }  
    .list{
        float: left;
        width: 95%;
        height: 400px;
    }
    .list p{
        float: right;
        font-size: 19px;
        margin: 0 10px;
    }
    .list a{
        color: #797979;
        display: block;
        width: 85%;
        font-size: 19px;
        /* 去掉下划线 */
        text-decoration: none;
    }
    li{
        border-bottom: 1px solid #81BED7;
        margin-left: 20px;
    }
    .check{
        float: left;
        margin: 0 40px;
        font-size: 17px;
        color: #333333;
    }
    .flip{
        float: right;
        margin: 0 40px;
    }
    .flip button{
        width: 50px;
        height: 25px;
        background: #81BED7;
        border: 0px solid #797979;
        border-radius: 2px;
    }
    .flip a{
        /* 去掉下划线 */
        text-decoration: none;
        color: #ffffff;
        font-size: 11px;
    }
</style>

