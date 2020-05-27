/*
 * @Description: 文章模块处理
 * @Author: wonanjie
 * @Date: 2020-05-25 14:58:41
 * @LastEditors: wonanjie
 * @LastEditTime: 2020-05-27 15:18:29
 */

const { Tool } = require('../model/tool')
const { ErrorModel, SuccessModel } = require('../model/resModel')
const { exec } = require('../db/mysql')
let tool = new Tool()
const newArticle = async (body) => {
    if (tool.isEmpty(body) || tool.isEmpty(body.author) || tool.isEmpty(body.title) || tool.isEmpty(body.content)) return new ErrorModel('新增文章失败')
    const createTime = Date.now()
    const sql = `insert into article(author,title,content,createTime) values('${body.author}','${body.title}','${body.content}','${createTime}');`
    const data = await exec(sql)
    console.log(data.insertId)
    return new SuccessModel('新增文章成功')
}

const getArticleList = async (page) => {
    if (tool.isEmpty(page)) return new ErrorModel('获取文章列表失败')
    const sql = `select * from article limit ${(page - 1) * 10}, 10;`
    const data = await exec(sql)
    return new SuccessModel(data, '获取文章列表成功')
}

const getArticleDetail = async (id) => {
    if (tool.isEmpty(id)) return new ErrorModel('获取文章详情失败')
    const sql = `select * from article where id='${id}';`
    const data = await exec(sql)
    return new SuccessModel(data, '获取文章详情成功')
}

const deleteArticle = async (body) => {
    if (tool.isEmpty(body)||tool.isEmpty(body.id)) return new ErrorModel('删除文章失败')
    const sql = `delete from article where id='${body.id}';`
    const data = await exec(sql)
    return new SuccessModel('删除文章成功')
}

const updateArticle=async (body)=>{
    if (tool.isEmpty(body)||tool.isEmpty(body.id)||tool.isEmpty(body.title)||tool.isEmpty(body.content)) return new ErrorModel('修改文章失败')
    const sql=`update article set title='${body.title}', content='${body.content}' where id=${body.id}`
    const data = await exec(sql)
    return new SuccessModel('更新文章成功')
}
module.exports = {
    newArticle, getArticleList, getArticleDetail, deleteArticle,updateArticle
}