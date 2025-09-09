import  Express  from "express";
import type {Request,Response} from "express";
const app=Express();
const port=process.env.PORT || 3000;
app.get('/',(_req:Request,res:Response)=>{
    res.send('Hello World');
});
app.listen(port,()=>{
  console.log(`server is running on http://localhost:${port}`);
});