//login模块的接口列表

/* import base from './base'; */
import axios from '@/utils/axios';
import Vue from 'vue'

/* const information = {
    information(params){
        console.log(params)
        //return axios.post("http://192.168.1.112:8080/ssm_learning_war_exploded/getTeacherInfo", params);
        return axios.post("http://47.97.97.208:8082/ssm_learning/getTeacherInfo", params);
    }
} */



function information() {
	/* axios.post("http://47.97.97.208:8082/ssm_learning/getTeacherInfo",
			function(result, state) {
				//这里显示从服务器返回的数据
				new Vue({
					el:'#intranet_faculty',
					data:{//data就是数据，主要绑定的数据
						lists:result
					}
				})
				//这里显示返回的状态
				console.log(state);
	
    }) */
    axios.post('http://47.97.97.208:8082/ssm_learning/getTeacherInfo',params)
            .then(res => {
                if (res.data.status === 200) {
                    console.log(res.data.message);
                    this.teacherName = res.data.message;
                    this.jobNumber = res.data.message;
                    this.date = res.data.message;
                }
            })
            .catch(err => {
                console.error('获取数据失败' + err);
            })
}



export default information;