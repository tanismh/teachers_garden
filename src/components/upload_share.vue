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
            <h2>共享资料上传</h2>
            <h3>标题：</h3>
            <input type="text" name="title" id="title" style="height: 30px; width: 730px;">
            <h3>正文：</h3> 

            <div class="upload">
                <button><a href="#">上传图片</a></button>
                <button><a href="#">上传文件</a></button>
            </div>

            <div id="editor"></div>
            <script type="text/javascript" src="../wangEditor-3.1.1/release/wangEditor.min.js"></script>
            <script language="JavaScript">
                var editor=window.wangEditor
                var ed=new editor('#editor')//这个editor是上面定义的div框架id
                ed.create()
                
                let eds = document.getElementsByClassName('w-e-toolbar')
                eds[0].style = eds[0].style.cssText + 'float: left; margin: 20px 20px 0;background:#F2F2F2'
                let eds1 = document.getElementsByClassName('w-e-text-container')
                eds1[0].style = eds[0].style.cssText + 'height: 250px; width: 730px; margin: 0 0 0 185px;background:#ffffff '
            </script>


            <div class="btn">
                <button><a href="#">提交</a></button>
                <button><a href="#">返回</a></button>
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
    
}
</script>

<style lang="less" scoped>
    .content{
        float: left;
        width: 98%;
        height: 555px;
        margin: 20px 10px 10px;
        background: #F2F2F2;
    }
    .content h2{
        float: left;
        color: #027DB4;
        font-size: 24px;
        margin: 20px 40px;
        width: 100%;
    }
    .content h3{
        float: left;
        color: #638EA1;
        font-size: 21px;
        margin: 20px 0px 20px 100px;
    }
    #title{
        float: left;
        margin: 20px;
        padding: 0;
        border: 1px solid #AAAAAA;
        border-radius: 2px;
    }
    .upload{
        float: left;
        margin: 0px 250px;
    }
    .upload button{
        width: 80px;
        height: 30px;
        margin: 0 20px;
        background: #81BED7;
        border: 0px solid #797979;
        border-radius: 5px;
    }
    .upload a{
        /* 去掉下划线 */
        text-decoration: none;
        color: #ffffff;
        font-size: 11px;
    }
    .editor{
        background: #FFFFFF;
        float: left;
        margin: 50px;
    }
    .btn{
        float: right;
        margin: 40px 100px;
    }
    .btn button{
        width: 80px;
        height: 30px;
        background: #81BED7;
        border: 0px solid #797979;
        border-radius: 5px;
    }
    .btn a{
        /* 去掉下划线 */
        text-decoration: none;
        color: #ffffff;
        font-size: 11px;
    }
</style>