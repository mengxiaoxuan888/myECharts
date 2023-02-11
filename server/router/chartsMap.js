// 引入express
const express=require("express")
// 创建路由
const router=express.Router()
//引入地图json数据
let mapData=require("../mock/china.json")

// 获取请求,当发送的是get请求时,并且链接到/data
router.get("/data",(req,res)=>{
    res.send({msg:"我是地图的路由地址",chinaData:mapData})
})

module.exports=router;