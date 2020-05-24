/*
 * @Description: user路由处理
 * @Author: wonanjie
 * @Date: 2020-05-24 14:44:17
 * @LastEditors: wonanjie
 * @LastEditTime: 2020-05-24 19:20:16
 */ 
const router = require('koa-router')()

router.prefix('/api/user')

router.post('/login', async function (ctx, next) {
    const{iphone} = ctx.request.body
    ctx.body={
        msg:'成功',
        error_cord:0,
        data:{
            xxoo:'nice 联调成功',
            wwww:'dwaadwadwawdadwadwdwawadwad'
        }
    }
    // let iphone=await login(iphone)
    
    // let data={
    //     xxx:'xxxx'
    // } 
    // ctx.body=ahax_return('xxx',0,data)
})
module.exports = router
