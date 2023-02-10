// 引入express
const express = require("express");
// 创建路由
const router = express.Router();
//引入json数据
const threeData = require("../mock/three.json");

// 获取请求,当发送的是get请求时,并且链接到/user
router.get("/data", (req, res) => {
  // 发送json数据返回给请求者
  // res.send('{"name":"第三个图表","age":18}')
  res.send({"threeData":threeData})
});

// 将路由暴漏出去
module.exports = router;