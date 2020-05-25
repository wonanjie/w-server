/*
 * @Description: user逻辑模块
 * @Author: wonanjie
 * @Date: 2020-05-24 14:53:20
 * @LastEditors: wonanjie
 * @LastEditTime: 2020-05-25 14:58:03
 */ 

const { ErrorModel, SuccessModel } = require('../model/resModel')
const login=async (iphone)=>{
    if(iphone==='18566209242'){
        return new SuccessModel('登陆成功')
    }else{
        return new ErrorModel('登陆失败')
    }
      
}

module.exports={
    login
}