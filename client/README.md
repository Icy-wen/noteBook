# 移动端适配问题
rem:相对于页面根字体大小
npm i lib-flexible

# UI库
react-vant

# css 预处理器
less

# html 标签样式重置
rest.css

# 项目梳理
1. 集中式路由配置
- 将路由配置集中在一个文件中，方便管理
- 路由的懒加载：（提高首页加载速度）
  - 路由的懒加载是指在需要时才加载路由组件，而不是在应用启动时就加载所有路由组件


2. 开发登录页
- css 样式隔离 xxx.module.css 
- 发登录请求 axios (XMLHttpRequest,fetch)
