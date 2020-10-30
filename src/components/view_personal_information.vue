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
    
            <div class="change"><button ><a href="#">修改</a></button></div>
    
            <div class="list">
                <div class="line">
                    <div class="div1"><e><h3>姓名:</h3></e></div>
                    <div class="div2">chen</div>
                </div>
    
                <div class="line">
                    <div class="div1"><e><h3>工号:</h3></e></div>
                    <div class="div2">XXXXXXX</div>
                </div>
    
                <div class="line">
                    <div class="div1"><e><h3>职位:</h3></e></div>
                    <div class="div2">XXXXXXXXXXXX</div>
                </div>
    
                <div class="line">
                    <div class="div1"><h3>入职日期:</h3></div>
                    <div class="div2">2020年10月18日</div>
                </div>
    
                <div class="line">
                    <div class="div1"><e><h3>密码:</h3></e></div>
                    <div class="div2">XXXXXX</div>
                </div>
    
                <div class="line">
                    <div class="div1"><h3>电话长号:</h3></div>
                    <div class="div2">XXXXXXXX</div>
                </div>
    
                <div class="line">
                    <div class="div1"><h3>电话短号:</h3></div>
                    <div class="div2">XXXXXX</div>
                </div>
    
                <div class="line">
                    <div class="div1"><e><h3>邮箱:</h3></e></div>
                    <div class="div2">XXXXX@163.com</div>
                </div>
    
                <div class="line">
                    <div class="div1"><e><h3>钉钉:</h3></e></div>
                    <div class="div2">XXXXX</div>
                </div>
    
                <div class="line">
                    <div class="div1"><e><h3>微信:</h3></e></div>
                    <div class="div2">XXXXXX</div>
                </div>
    
                <div class="line">
                    <div class="div1"><e><h3>性别:</h3></e></div>
                    <div class="div3"><input type="radio" name="sexline" value="man">男</div>
                    <div class="div4"><input type="radio" name="sexline" value="woman" checked="checked">女</div>
                </div>
            </div>
            
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

    .change button{
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

    .change a{
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
        float: left;
        height: 25px;
        margin: 10px;  
    }

    .div4{
        float: left;
        height: 25px;
        margin: 10px;   
    }
</style>