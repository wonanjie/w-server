/*
 * @Description: 文章模块处理
 * @Author: wonanjie
 * @Date: 2020-05-25 14:58:41
 * @LastEditors: wonanjie
 * @LastEditTime: 2020-06-03 22:24:05
 */

const { Tool } = require('../model/tool')
const { ErrorModel, SuccessModel } = require('../model/resModel')
const { exec } = require('../db/mysql')
let tool = new Tool()
const newArticle = async (body) => {
    if (tool.isEmpty(body) || tool.isEmpty(body.author) || tool.isEmpty(body.title) || tool.isEmpty(body.content)) return new ErrorModel('新增文章失败')
    const createTime = Date.now()
    let sql
    if (tool.isEmpty(body.columnId)) {
        sql = `insert into article(author,title,content,createTime) values('${body.author}','${body.title}','${body.content}','${createTime}');`
    } else {
        sql = `insert into article(author,title,content,createTime,columnId) values('${body.author}','${body.title}','${body.content}','${createTime}',${body.columnId});`
    }
    const data = await exec(sql)
    console.log(data.insertId)
    return new SuccessModel('新增文章成功')
}

const getArticleList = async (page) => {
    if (tool.isEmpty(page)) return new ErrorModel('获取文章列表失败')
    let sql = `select a.*,b.columnName from article a left join column_table b on a.columnId=b.columnId limit ${(page - 1) * 10}, 10;`
    // const sql = `select * from article limit ${(page - 1) * 10}, 10;`
    const data = await exec(sql)
    sql=`select id from article`
    const totalPage = await exec(sql)
    let res=new SuccessModel(data, '获取文章列表成功')
    res.totalPage=Math.ceil(totalPage.length/10)
    return res
}

const getArticleDetail = async (id) => {
    if (tool.isEmpty(id)) return new ErrorModel('获取文章详情失败')
    const sql = `select a.*,b.columnName from article a left join column_table b on a.columnId=b.columnId where id=${id};`
    const data = await exec(sql)
    return new SuccessModel(data, '获取文章详情成功')
}

const deleteArticle = async (body) => {
    if (tool.isEmpty(body) || tool.isEmpty(body.id)) return new ErrorModel('删除文章失败')
    const sql = `delete from article where id=${body.id};`
    const data = await exec(sql)
    return new SuccessModel('删除文章成功')
}

const updateArticle = async (body) => {
    if (tool.isEmpty(body) || tool.isEmpty(body.id) || tool.isEmpty(body.title) || tool.isEmpty(body.content)) return new ErrorModel('修改文章失败')
    let sql
    if (tool.isEmpty(body.columnId)) {
        sql = `update article set title='${body.title}', content='${body.content}' where id=${body.id};`
    } else {
        sql = `update article set title='${body.title}', content='${body.content}',columnId=${body.columnId} where id=${body.id};`
    }
    const data = await exec(sql)
    return new SuccessModel('修改文章成功')
}

const newColumn = async (body) => {
    if (tool.isEmpty(body) || tool.isEmpty(body.columnName)) return new ErrorModel('新增专栏失败')
    const sql = `insert into column_table(columnName) values('${body.columnName}');`
    const data = await exec(sql)
    return new SuccessModel('新增专栏成功')
}
const deleteColumn = async (body) => {
    if (tool.isEmpty(body) || tool.isEmpty(body.columnId)) return new ErrorModel('删除专栏失败')
    const sql = `delete from column_table where columnId=${body.columnId};`
    const data = await exec(sql)
    return new SuccessModel('删除专栏成功')
}
const getColumnList = async () => {
    const sql = `select * from column_table;`
    const data = await exec(sql)
    return new SuccessModel(data, '获取专栏列表成功')
}

const updateColumn = async (body) => {
    if (tool.isEmpty(body) || tool.isEmpty(body.columnName) || tool.isEmpty(body.columnId)) return new ErrorModel('修改专栏失败')
    const sql = `update column_table set columnName='${body.columnName}' where columnId=${body.columnId};`
    const data = await exec(sql)
    return new SuccessModel('修改专栏成功')
}

const search = async (params) => {
    const sql = `select a.*,b.columnName from article a left join column_table b on a.columnId=b.columnId`
    const data = await exec(sql)
    let _data = []
    console.log(params)
    if (params.startDate && params.keyword) { //都存在
        console.log('都存在')
        for (let i = 0; i < data.length; i++) {
            if (data[i].createTime > params.startDate && data[i].createTime < params.endDate&&data[i].title.includes(params.keyword)) _data.push(data[i])
        }
    } else if (params.startDate && !params.keyword) { //keyword不存在
        console.log('keyword不存在')
        for (let i = 0; i < data.length; i++) {
            if (data[i].createTime > params.startDate && data[i].createTime < params.endDate) _data.push(data[i])
        }
    } else if (!params.startDate && params.keyword) { //日期不存在
        console.log('日期不存在')
        for (let i = 0; i < data.length; i++) {
            if (data[i].title.includes(params.keyword)) _data.push(data[i])
        }
    } else {   //都不存在
        return new SuccessModel(data,'查询条件不存在')
    }

    if(_data.length===0){
        return new SuccessModel('查询结果不存在')
    }else{
        return new SuccessModel(_data,'查询成功')
    }
}
module.exports = {
    newArticle, getArticleList, getArticleDetail, deleteArticle, updateArticle, newColumn, deleteColumn, getColumnList, updateColumn, search
}