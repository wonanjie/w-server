/*
 * @Description: 文章模块处理
 * @Author: wonanjie
 * @Date: 2020-05-25 14:58:41
 * @LastEditors: wonanjie
 * @LastEditTime: 2020-05-25 19:07:11
 */ 
const { ErrorModel, SuccessModel } = require('../model/resModel')
const newArticle=async (body)=>{
    const author=body.auther
    const title=body.title
    const content=body.content
    const createTime=Date.now()
    return new SuccessModel('新增文章成功')
}

module.exports={
    newArticle
}