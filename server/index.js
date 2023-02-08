// 引入express
const express = require('express')
// 创建app
const app = express()
// 引入chartsOne,chartsTwo,chartsThree,chartsFour文件
const chartsOne = require('./router/chartsOne')
const chartsTwo = require('./router/chartsTwo')
const chartsThree = require('./router/chartsThree')
const chartsFour = require('./router/chartsFour')

// 使用，当链接匹配则调用该路由
app.use('/one',chartsOne)
app.use('/two',chartsTwo)
app.use('/three',chartsThree)
app.use('/four',chartsFour)

// 请求不匹配给用户回复404
app.use(function(req,res){
    res.send("404")
})

// 监听端口号
app.listen(8888)