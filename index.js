const express=require("express");
const app =express();

const users=[{
    name:"kakkar",
    kidneys:[{
        healthy:false
    }]
}];
app.use(express.json())
app.get("/",function(req,res){
    const kakkarkidneys=users[0].kidneys;
    const numberOfkidneys=kakkarkidneys.length;
    let numberOfhealthykidneys = 0;
    for(let i=0;i<kakkarkidneys.length;i++){
        if(kakkarkidneys[i].healthy){
            numberOfhealthykidneys=numberOfhealthykidneys+1;
        }
    }
    const numberOfUnhealthykidneys=numberOfkidneys-numberOfhealthykidneys;
    res.json({
       numberOfkidneys,
        numberOfhealthykidneys,
        numberOfUnhealthykidneys
    })
})

app.post("/",function(req,res){

    const ishealthy=req.body.ishealthy;
    users[0].kidneys.push({
        healthy:ishealthy
    })
    res.json({
        msg:"done!"
    })
})

app.put("/",function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({});
})

app.delete("/",function(req,res){
    const newkidneys=[];
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newkidneys.push({
                healthy:true
            })
        }
    }
    users[0].kidneys=newkidneys;
    res.json({
        msg:"done"
    })
})

app.listen(3002);