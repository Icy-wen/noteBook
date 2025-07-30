const Router = require('@koa/router')
const router = new Router()
const { verify } = require('../utils/jwt.js')
const { findNoteListByType } = require('../controllers/index.js')
const { findNoteDetailById } = require('../controllers/index.js')
const { publishNote } = require('../controllers/index.js')
router.get('/findNoteListByType', verify(), async(ctx) => {
    const { note_type } = ctx.request.query//get请求，从url解析参数
    // console.log(note_type);
    try {
        const res = await findNoteListByType(note_type, ctx.userId)
        console.log(res);
        if (res.length > 0) {
            ctx.body = {
                code: '1',
                msg: '查询成功',
                data: res
            }
        } else {
            ctx.body = {
                code: '1',
                msg: '未查询到相关笔记',
                data: []
            }
        }
    } catch (error) {
        ctx.body = {
            code: '-1',
            msg: '查询失败',
            data: '服务器异常'
        }
    }
})
router.get('/findNoteDetailById',verify(),async(ctx)=>{
    const {id}=ctx.request.query
    try {
        const res = await findNoteDetailById(id)
        //console.log(res[0]);
        if(res.length>0){
            ctx.body={
                code:'1',
                msg:'查询成功',
                data:res[0]
            }
        }else{
            ctx.body={
                code:'0',
                msg:'查询失败',
                data:[]
            }
        }
    } catch (error) {
        ctx.body={
            code:'-1',
            msg:'查询失败',
            data:'服务器异常'
        }
    }
})
// 取消注释并修复publishNote函数调用
router.post('/note-publish', verify(), async (ctx) => {
  const { note_title, note_content, note_img, note_type } = ctx.request.body
  const user_id = ctx.userId
  const now = Date.now()
  try {
    const res = await publishNote(note_title, note_content, note_type, note_img, user_id, now, now)
    if (res.affectedRows > 0) {
      ctx.body = {
        code: '1',
        msg: '发布成功',
        data: res
      }
    } else {
      ctx.body = {
        code: '0',
        msg: '发布失败',
        data: []
      }
    }
  } catch (error) {
    ctx.body = {
      code: '-1',
      msg: '服务器异常',
      data: error
    }
  }
})
module.exports = router