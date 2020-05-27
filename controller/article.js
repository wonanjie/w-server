/*
 * @Description: 文章模块处理
 * @Author: wonanjie
 * @Date: 2020-05-25 14:58:41
 * @LastEditors: wonanjie
 * @LastEditTime: 2020-05-27 20:00:03
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
    const sql = `select * from article where id=${id};`
    const data = await exec(sql)
    return new SuccessModel(data, '获取文章详情成功')
}

const deleteArticle = async (body) => {
    if (tool.isEmpty(body)||tool.isEmpty(body.id)) return new ErrorModel('删除文章失败')
    const sql = `delete from article where id=${body.id};`
    const data = await exec(sql)
    return new SuccessModel('删除文章成功')
}

const updateArticle=async (body)=>{
    if (tool.isEmpty(body)||tool.isEmpty(body.id)||tool.isEmpty(body.title)||tool.isEmpty(body.content)) return new ErrorModel('修改文章失败')
    const sql=`update article set title='${body.title}', content='${body.content}' where id=${body.id};`
    const data = await exec(sql)
    return new SuccessModel('修改文章成功')
}

const newColumn=async (body)=>{
    if (tool.isEmpty(body)||tool.isEmpty(body.columnName)) return new ErrorModel('新增专栏失败')
    const sql=`insert into column_table(columnName) values('${body.columnName}');`
    const data = await exec(sql)
    return new SuccessModel('新增专栏成功')
}
const deleteColumn=async (body)=>{
    if (tool.isEmpty(body)||tool.isEmpty(body.columnId)) return new ErrorModel('删除专栏失败')
    const sql=`delete from column_table where columnId=${body.columnId};`
    const data = await exec(sql)
    return new SuccessModel('删除专栏成功')
}
const getColumnList=async ()=>{
    const sql=`select * from column_table;`
    const data = await exec(sql)
    return new SuccessModel(data,'获取专栏列表成功')
}

const updateColumn=async (body)=>{
    if (tool.isEmpty(body)||tool.isEmpty(body.columnName)||tool.isEmpty(body.columnId)) return new ErrorModel('修改专栏失败')
    const sql=`update column_table set columnName='${body.columnName}' where columnId=${body.columnId};`
    const data = await exec(sql)
    return new SuccessModel('修改专栏成功')
}
module.exports = {
    newArticle, getArticleList, getArticleDetail, deleteArticle,updateArticle,newColumn,deleteColumn,getColumnList,updateColumn
}