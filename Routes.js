
const Routes=require("express").Router()
const {Bollywood,Hollywood,Fitness,Food,Home,Technology,All}=require("./Controller")

Routes.get("/bollywood",Bollywood)
Routes.get("/hollywood",Hollywood)
Routes.get("/fitness",Fitness)
Routes.get("/food",Food)
Routes.get("/home",Home)
Routes.get("/technology",Technology)
Routes.get("/all",All)

module.exports=Routes