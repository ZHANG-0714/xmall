//用来封装所有请求
import service from './index'

export default {
    // 首页数据
    getHome() {
        return service.get('/goods/home')
    },

    // 为你推荐
    recommend() {
        return service.get('/goods/recommend')
    },

    // 所有商品
    allGoods() {
        return service.get('/goods/allGoods')
    },
    
    //     ### 登陆

    // ``` js
    // http://localhost:3456/users/login
    // 请求方式: post
    // 参数:
    // username: 用户名
    // password: 密码
    // ```
    login(username, password){
        return service.post('/users/login ', {
            username,
            password
        })
    },

    //     ### 注册

    // ``` js
    // http://localhost:3456/users/register
    // 请求方式: post
    // 参数:
    // username: 用户名
    // password: 密码
    // ```
    // 注册
    register(username, password) {
        return service.post('/users/register ', {
            username,
            password
        })
    },

}