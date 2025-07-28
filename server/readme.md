# 服务端逻辑分层
1. 路由层:处理当前端请求不同路劲时，执行对应的响应逻辑
2. 控制层:执行响应逻辑时调用的方法
3. 服务层
4. 数据层

# 框架
1. express
2. koa(使用)
3. nestjs

# 项目梳理

- http 请求体，响应体
- 路由: 处理当前端请求不同路劲时，执行对应的响应逻辑
使用路由要将所有回调use
- 跨域问题
1. https://     192.168.3.1     :3000    /home
协议            域名            端口    路径
2. 浏览器自带同源策略：协议，域名，端口一致 （保证后端安全）
3. cors
- 连接数据库
创建mysql的配置文件

1. 打造登录接口
- 路由：/user/login
- 方法：post
- 请求体：
    - username
    - password
- 响应体：
    - code
    - msg
    - data

# jwt令牌
https://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html


- 防sql注入