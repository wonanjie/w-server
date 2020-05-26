/*
 * @Description: 工具方法
 * @Author: wonanjie
 * @Date: 2020-05-26 16:57:48
 * @LastEditors: wonanjie
 * @LastEditTime: 2020-05-26 17:45:52
 */
class Tool {
    constructor() { }
    isEmpty(v) {
        switch (typeof v) {
            case 'undefined':
                return true;
            case 'string':
                if (v.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
                break;
            case 'boolean':
                if (!v) return true;
                break;
            case 'number':
                if (0 === v || isNaN(v)) return true;
                break;
            case 'object':
                if (null === v || v.length === 0) return true;
                for (var i in v) {
                    return false;
                }
                return true;
        }
        return false;
    }
}

module.exports={
    Tool
}