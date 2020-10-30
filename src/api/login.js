//login模块的接口列表

/* import base from './base'; */
import axios from '@/utils/axios';

const login = {
    login(params){
        console.log(params)
        //return axios.post("http://192.168.1.112:8080/ssm_learning_war_exploded/login", params);
        return axios.post("http://47.97.97.208:8082/ssm_learning/login", params);
    }
}

export default login;