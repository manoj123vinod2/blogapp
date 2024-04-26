
const mongoose=require("mongoose");
mongoose.connect('mongodb+srv://athulps:athulps@athulps.80h2hoh.mongodb.net/NirBlogapp?retryWrites=true&w=majority&appName=athulps')
.then(()=>{
    console.log("db connected")
})
.catch((error)=>{
    console.log(error)
})