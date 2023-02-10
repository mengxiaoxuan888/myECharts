// 引入express
const express = require("express");
// 创建路由
const router = express.Router();
//引入json数据
const oneData = require("../mock/one.json");

// 获取请求,当发送的是get请求时,并且链接到/user
router.get("/data", (req, res) => {
  // 发送json数据返回给请求者
  // res.send({"name":"第一个图表","age":18})
  res.send({"oneDate":oneData})
});

// 将路由暴漏出去
module.exports = router;