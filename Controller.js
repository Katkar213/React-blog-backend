
const Data=require("./DummyData")

const Bollywood=(req,res)=>{
const BollywoodData=Data.filter(item=>item.Category==="Bollywood")
res.send(BollywoodData)
}

const Hollywood=(req,res)=>{
const HollywoodData=Data.filter(item=>item.Category==="Hollywood")
res.send(HollywoodData)
}

const Fitness=(req,res)=>{
const FitnessData=Data.filter(item=>item.Category==="Fitness")
res.send(FitnessData)
}

const Food=(req,res)=>{
    const FoodData=Data.filter(item=>item.Category==="Food")
    res.send(FoodData)
    }

const Home=(req,res)=>{
    const HomeData=Data.filter(item=>item.Category==="Home")
    res.send(HomeData)
    }

    const Technology=(req,res)=>{
        const TechnologyData=Data.filter(item=>item.Category==="technology")
        res.send(TechnologyData)
        }
    const All=(req,res)=>{
       
        res.send(Data)
    }

module.exports={Bollywood,Hollywood,Fitness,Food,Home,Technology,All}