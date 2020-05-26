/*
 * @Description: 文章路由处理
 * @Author: wonanjie
 * @Date: 2020-05-25 14:57:28
 * @LastEditors: wonanjie
 * @LastEditTime: 2020-05-26 17:53:55
 */ 
const router = require('koa-router')()

const {newArticle,getArticleList}=require('../controller/article')

router.prefix('/api/article')

router.post('/newArticle',async function (ctx,next){
    const body = ctx.request.body
    ctx.body=await newArticle(body)
})

router.post('/getArticleList',async function (ctx,next){
})

module.exports = router