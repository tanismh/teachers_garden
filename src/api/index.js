//api接口的统一出口

//登录模块的接口
import login from '@/api/login';
//个人信息模块接口
import information from '@/api/information';


//导出接口
export default{
    login,
    information,
}