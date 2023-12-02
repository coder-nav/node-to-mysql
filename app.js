const express = require('express')
const app = express()
const mysql = require('mysql')
app.use(express.urlencoded({ extended: false }));
// 接口
app.post('/mysql', (request, response) => {
  console.log(request.body);
  let conn = mysql.createConnection({
    host: request.body.host,
    port: request.body.port,
    database: request.body.database,  
    user: request.body.user,
    password: request.body.password
  });
  // 连接数据库
  conn.connect(err => {});
  let sql = request.body.sql;
  conn.query(sql, (error, result) => {
    response.send(result);
  });
})
// 开启服务器
app.listen(80, () => {
  console.log('node-to-mysql running ~');
})
