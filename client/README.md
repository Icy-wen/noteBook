# 移动端适配问题
rem:相对于页面根字体大小
npm i lib-flexible

# UI库
react-vant

# css 预处理器
less

# html 标签样式重置
rest.css

# 路由传参
- navigate('/noteList?category=1')  useSearchParams
- navigate('/home/1')  配置路由时 path:'/home/:id'  useParams()
- navigate('/home',{
  state:{
    id:1
  }
})
和第一种写法一样，但好处是不会直接在url显示，useLoction()
# 项目梳理
1. 集中式路由配置
- 将路由配置集中在一个文件中，方便管理
- 路由的懒加载：（提高首页加载速度）
  - 路由的懒加载是指在需要时才加载路由组件，而不是在应用启动时就加载所有路由组件


2. 开发登录页
- css 样式隔离 xxx.module.css 
- 发登录请求 axios (XMLHttpRequest,fetch)
- 因为react-vant Toast 组件不兼容，所以使用react-hot-toast

3. 登录鉴权 
- 当用户未登录时，访问需要登录才能访问的页面，会向后端发送请求
- 后端在登录接口中生成一个令牌，返回给前端,前端本地保存令牌
- 前端在后续的请求中，将令牌放在请求头中
- 后端在每次请求时，都会检查请求头中是否有令牌
- 如果有令牌，说明用户已登录，否则说明用户未登录，返回401，跳转到登录页

- 以上功能实现了鉴权，但token会过期，需要重新登录，实现一个无感刷新token的效果
  - 后端在登录接口返回一个长token和一个短token。短token用来做权限校验，长token用来在短token失效后重新获取新的短token和长token

4. 首页 noteClass

5. 列表页 noteList
- 手动封装下拉刷新操作，下拉组件中监听手指的touch事件，根据手指在y轴的移动距离，来控制容器向下平移的距离，从而展示出头部的下拉刷新字样。放开手指后，帮父组件触发重新请求数据的函数

s

