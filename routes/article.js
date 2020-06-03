/*
 * @Description: 文章路由处理
 * @Author: wonanjie
 * @Date: 2020-05-25 14:57:28
 * @LastEditors: wonanjie
 * @LastEditTime: 2020-06-03 17:39:30
 */ 
const router = require('koa-router')()

const {newArticle,getArticleList,getArticleDetail,deleteArticle,updateArticle,newColumn,deleteColumn,getColumnList,updateColumn,search}=require('../controller/article')

router.prefix('/api/article')

router.post('/newArticle',async function (ctx,next){
    const body = ctx.request.body
    ctx.body=await newArticle(body)
})

router.get('/getArticleList',async function (ctx,next){
    const page=ctx.query.page
    ctx.body=await getArticleList(page)
})

router.get('/getArticleDetail',async function (ctx,next){
    const id=ctx.query.id
    ctx.body=await getArticleDetail(id)
})

router.post('/deleteArticle',async function (ctx,next){
    const body=ctx.request.body
    ctx.body=await deleteArticle(body)
})

router.post('/updateArticle',async function (ctx,next){
    const body = ctx.request.body
    ctx.body=await updateArticle(body)
})


router.post('/newColumn',async function (ctx,next){
    const body = ctx.request.body
    ctx.body=await newColumn(body)
})

router.post('/deleteColumn',async function (ctx,next){
    const body = ctx.request.body
    ctx.body=await deleteColumn(body)
})

router.get('/getColumnList',async function (ctx,next){
    ctx.body=await getColumnList()
})

router.post('/updateColumn',async function (ctx,next){
    const body = ctx.request.body
    ctx.body=await updateColumn(body)
})

router.get('/search',async function (ctx,next){
    ctx.body=await search(ctx.query)
})
module.exports = router