const express= require('express');
const morgan=require('morgan');
const cors=require('cors');

port=3008;
require('./DB/connection');
const userRoutes=require('./Routes/userRoutes')
const posRoutes=require('./Routes/posRoutes')

const app=express();


app.use(morgan('dev'));
app.use(cors());
app.use('/api',userRoutes)
app.use('/api',posRoutes)

app.listen(port,()=>{
    console.log(`server is running in ${port}!`);
})