/*
 * @Description: user路由处理
 * @Author: wonanjie
 * @Date: 2020-05-24 14:44:17
 * @LastEditors: wonanjie
 * @LastEditTime: 2020-05-25 14:51:59
 */
const router = require('koa-router')()
const { login } = require('../controller/user')
const { ErrorModel, SuccessModel } = require('../model/resModel')

router.prefix('/api/user')

router.post('/login', async function (ctx, next) {
    const { iphone } = ctx.request.body
    if (iphone){
        ctx.body=await login(iphone)
    }else{
        ctx.body=new ErrorModel('参数为空')
    }
})
module.exports = router
