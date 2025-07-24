const Router = require('@koa/router')
const router = new Router()
const {userLogin} = require('../controllers/index.js')
router.prefix('/user')
router.post('/login',async(ctx)=>{
    //1. 获取请求体中的账号密码
    //post 请求携带的参数都在请求体中
    const {username,password} = ctx.request.body//解构
    console.log(username,password)
    //2. 检验账号密码是否正确
    //从数据库里拿
    try{
        const res=await userLogin(username,password)
    console.log(res)
    if(res.length){//找到了有数据
        let data={
            id:res[0].id,
            username:res[0].username,
            nickname:res[0].nickname,
            create_time:res[0].create_time,       
        }
        ctx.body={
            code:'1',
            msg:'登录成功',
            data:data
        }
    }else{//逻辑性错误
        ctx.body={
            code:'0',
            msg:'账号或密码错误',
            data:{}
        }
    }   
    }catch(error){
        ctx.body={
            code:'-1',
            msg:'服务器异常',
            data:error
        }
    }
})


























module.exports=router