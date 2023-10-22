console.log("hello")

const Routes=require("./Routes")
const cors=require("cors")
const express=require("express")
const app=express();

app.use(cors())
app.use("/api",Routes)

app.listen(4001,()=>{
    console.log("Your server is live")
})