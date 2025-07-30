// 数据库相关操作
const mysql = require('mysql2/promise')
const config = require('../config/index.js')

// 创建线程池 （连接池）
const pool = mysql.createPool({
  host: config.db.host,
  port: config.db.port,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database
})

// 执行 sql 的方法
const allServices = {
  async query(sql, values) {
    try {
      // 通过连接池连接mysql
      const conn = await pool.getConnection()
      // 执行各种增删改查的 sql 语句
      const [rows, fields] = await conn.query(sql, values)
      // 释放连接
      pool.releaseConnection(conn);
      // 返回查询结果
      return Promise.resolve(rows)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

// 登录要执行函数
const userLogin = (username, password) => {
  let _sql = `select * from user where username='${username}' and password='${password}';`
  return allServices.query(_sql)
}
// 查找账号是否存在
const findUser = (username) => {
  let _sql = `select * from user where username='${username}' ;`
  return allServices.query(_sql)
}
// 注册要执行函数
const userRegister = (userInfo) => {
  let _sql = `insert into user (username,password,nickname,create_time) values ('${userInfo.username}','${userInfo.password}','${userInfo.nickname}',${userInfo.create_time});`
  return allServices.query(_sql)
}
// 根据类型查找笔记列表
const findNoteListByType = (note_type,user_id) => {
  let _sql = `select * from note where note_type='${note_type}' and user_id=${user_id};`
  return allServices.query(_sql)
}
// 根据id查找笔记详情
const findNoteDetailById = (id) => {
  let _sql = `select note.*, user.nickname from note join user on note.user_id = user.id where note.id=${id};`
  return allServices.query(_sql)
}
// 发布笔记
const publishNote = (note_title,note_content,note_type,note_img,user_id,create_time,update_time) => {
  let _sql = `insert into note (note_title,note_content,note_type,note_img,user_id,create_time,update_time) values ('${note_title}','${note_content}','${note_type}','${note_img}',${user_id},${create_time},${update_time});`
  return allServices.query(_sql)
}
module.exports={
    userLogin,
    findUser,
    userRegister,
    findNoteListByType,
    findNoteDetailById,
    publishNote
}
