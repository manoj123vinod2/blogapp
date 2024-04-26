const express=require('express');
const router=express.Router();
const post=require('../Model/post')

router.use(express.json());


//add
router.post('/addblog',(req,res)=>{
    try{
        const data=post(req.body).save();
        res.status(200).json({message:'blog added'})
    }
    catch(err){
        console.log(error);
        res.json({message:'unable to add'})
    }
})

//to view
router.get('/viewall',async(req,res)=>{
    try{
        const data=await post.find();
        res.status(200).json(data);
    
    
    }catch(error)
    {
        console.log(error);
      
    }
})




router.delete('/remove/:id',async(req,res)=>{
    
    try{
        console.log(req.params.id);
        const data=await post.findByIdAndDelete(req.params.id)
        res.status(200).send({message:"blog deleted"})
    
    
    }catch(error)
    {
        res.status(404).send({message:"blog deleted"})
      
    }
})
router.put('/edit/:id',async(req,res)=>{

try{
   var userId=req.params.id;
var item=req.body;
    const data=await post.findByIdAndUpdate(userId,item)
    res.status(200).send({message:"blog updated"})
}catch(error){
    res.status(404).send({message:"blog not updated"})
    console.log(error)
}

})











module.exports = router;