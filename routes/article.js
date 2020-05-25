/*
 * @Description: 文章路由处理
 * @Author: wonanjie
 * @Date: 2020-05-25 14:57:28
 * @LastEditors: wonanjie
 * @LastEditTime: 2020-05-25 19:04:17
 */ 
const router = require('koa-router')()
const { ErrorModel, SuccessModel } = require('../model/resModel')
const {newArticle}=require('../controller/article')

router.prefix('/api/article')

router.post('/newArticle',async function (ctx,next){
    const body = ctx.request.body
    ctx=await newArticle(body)
})
router.get('/getArticleList', async function (ctx, next) {
   
})
module.exports = router