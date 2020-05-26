/*
 * @Description: 文章模块处理
 * @Author: wonanjie
 * @Date: 2020-05-25 14:58:41
 * @LastEditors: wonanjie
 * @LastEditTime: 2020-05-26 17:47:38
 */ 

const {Tool}=require('../model/tool')
const { ErrorModel, SuccessModel } = require('../model/resModel')
const {exec}=require('../db/mysql')
const newArticle=async (body)=>{
    let tool=new Tool()
    
    if(tool.isEmpty(body)) return new ErrorModel('新增文章失败')
    if(tool.isEmpty(body.author)) return new ErrorModel('作者不存在')
    if(tool.isEmpty(body.title)) return new ErrorModel('请填写标题标题')
    if(tool.isEmpty(body.content)) return new ErrorModel('请填写内容')
    const author=body.author
    const title=body.title
    const content=body.content
    const createTime=Date.now()
    const sql=`insert into article(author,title,content,createTime) values('${author}','${title}','${content}','${createTime}');`
    const insertData = await exec(sql)
    console.log(insertData.insertId)
    return new SuccessModel('新增文章成功')
}

const getArticleList= async (body)=>{
    
}
module.exports={
    newArticle,getArticleList
}