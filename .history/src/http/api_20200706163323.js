//用来封装所有请求
import service from './index'

export default {
    // 首页数据
    getHome(){
        return service.get('/goods/home')
    },

    // 为你推荐
    recommend(){
        return service.get('/goods/recommend')
    }
}