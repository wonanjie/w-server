# w-server

# 接口信息
## /api/user
### /login
```
type: post 参数: {iphone: string}  返回:{message: 返回信息 ,errno: 1为登录成功 0为登录失败}
```
## /api/article
### /newArticle 
```
type: post 参数: {author: string(传参写死沃南杰) title: string,content: string,columnId:string}  返回:{message: 返回信息 ,errno: 1为新增文章成功 0为新增文章失败}
```
### /getArticleList
```
type: get 参数: {page: number(页码 从1开始传,即每页只展示10个数据)}  返回:{message: 返回信息 ,errno: 1为获取文章成功 0为获取文章失败,data:[{id:1,author:'沃南杰',title:'标题',content:'内容',createTime:时间戳,columnId:专栏id,columnName:专栏名称}]
```
### /getArticleDetail
```
type: get 参数: {id: number(文章id)}  返回:{message: 返回信息 ,errno: 1为获取文章详情成功 0为获取文章详情失败,data:[{id:1,author:'沃南杰',title:'标题',content:'内容',createTime:时间戳,columnId:专栏id,columnName:专栏名称}]
```

### /deleteArticle
```
type: post 参数: {id: number(文章id)}  返回:{message: 返回信息 ,errno: 1为删除文章成功 0删除文章失败}
```

### /updateArticle
```
type: post 参数: {id: number(文章id),title:string,content:string}  返回:{message: 返回信息 ,errno: 1为修改文章成功 0修改文章失败}
```

### /newColumn
```
type: post 参数: {columnName:string}  返回:{message: 返回信息 ,errno: 1为新增专栏成功 0新增专栏失败}
```

### /getColumnList
```
type: get 参数: {(不需要传参)}  返回:{message: 返回信息 ,errno: 1为新增专栏成功 0新增专栏失败,data:[{columnId:专栏id,columnName:专栏名称}]}
```
### /deleteColumn
```
type: post 参数: {columnId: number}  返回:{message: 返回信息 ,errno: 1为删除专栏成功 0删除专栏失败}
```

### /updateColumn
```
type: post 参数: {columnId: number,columnName: string}  返回:{message: 返回信息 ,errno: 1为修改专栏成功 0修改专栏失败}
```

<!-- ### /search
```
type: get 参数: {}  返回:{message: 返回信息 ,errno: 1为修改文章成功 0修改文章失败}
``` -->