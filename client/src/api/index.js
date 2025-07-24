import axios from 'axios'
import {Tabs, Toast} from 'react-vant'
axios.defaults.baseURL = 'http://localhost:3000'
//告诉浏览器如果发生的post请求，后端一定会返回json格式的请求，让浏览器解析json格式的响应
axios.defaults.headers.post['Content-Type'] = 'application/json'

//响应拦截器
axios.interceptors.response.use(response=>{
    if(response.status!==200){
        alert('服务器异常')
        return Promise.reject(response)//方便在页面捕获异常
    }else{
        if(response.data.code!=='1'){
            alert(response.data.msg)
            return Promise.reject(response)
        }
        return response.data
    }
})
export default axios
