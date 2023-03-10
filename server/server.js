// 引入express
const express = require('express')
// 创建app
const app = express()


const cors = require("cors");
// 使用cors中间件
app.use(cors());

// 设置跨域
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');

    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');

    next();
})

// 引入chartsOne,chartsTwo,chartsThree,chartsFour文件
const chartsOne = require('./router/chartsOne')
const chartsTwo = require('./router/chartsTwo')
const chartsThree = require('./router/chartsThree')
const chartsFour = require('./router/chartsFour')
// 引入chartsMap中国地图文件
const chartMap=require("./router/chartsMap")

// 使用，当链接匹配则调用该路由
app.use('/one',chartsOne)
app.use('/two',chartsTwo)
app.use('/three',chartsThree)
app.use('/four',chartsFour)
app.use("/china",chartMap)

// 发起get请求，首页匹配地址
app.get('/', (req, res)=>{
    console.log('欢迎来到首页')
    res.send('我是首页')
})

// 发起get请求，用户页匹配地址
app.get('/user', (req, res)=>{
    console.log('欢迎来到用户页')
    res.send('我是用户页')
})

app.use(function(req,res){
    res.send("404")
    console.log('页面不存在,请确认网址是否错误！！！')
})

// 监听端口号跟地址
const PORT = 3000
const HOST = '0.0.0.0'
app.listen(PORT,HOST)
console.log(`Running on http://${HOST}:${PORT}`)