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
type: post 参数: {author: string(传参写死沃南杰) title: string,content: string}  返回:{message: 返回信息 ,errno: 1为新增文章成功 0为新增文章失败}
```
### /getArticleList
```
type: get 
```