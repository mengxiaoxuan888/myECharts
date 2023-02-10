// 引入express
const express = require("express");
// 创建路由
const router = express.Router();

// 获取请求,当发送的是get请求时,并且链接到/user
router.get("/user", (req, res) => {
  // 发送json数据返回给请求者
  res.send('{"name":"第二个图表","age":18}');
});

// 将路由暴漏出去
module.exports = router;