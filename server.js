const express =require('express')
const app = express()

app.use(date =(req,res,next)=>{
    let requestAt =new Date().getHours()
    // console.log(requestAt)
    if(requestAt<8||requestAt>17){
        
         console.log("Our office is not open now")
    }
    next()
    console.log(requestAt)
})
app.use(express.static(__dirname +'/public'))
app.get('/*',(req,res) => {
    res.sendFile(__dirname +'/public/home.html')
    
})
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});