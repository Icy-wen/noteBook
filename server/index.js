const Koa = require('koa')
const app = new Koa()
const userRouter = require('./router/user.js')
const noteRouter = require('./router/note.js')
const cors = require('@koa/cors')
const bodyParser = require('@koa/bodyparser').default
app.use(cors())//允许跨域
app.use(bodyParser())//辅助koa解析请求体
app.use(userRouter.routes(),userRouter.allowedMethods())
app.use(noteRouter.routes(),noteRouter.allowedMethods())

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})