import axios from 'axios'

//创建一个axios的实例
const service = axios.create({
    //请求基础路径，发请求时可省略
    baseURL : '/api',
    //超时时间
    timeout : 10000
})

// 响应拦截
service.interceptors.response.use(res =>{
   return res.data
})

//导出
export default service