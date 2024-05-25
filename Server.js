import express from 'express'
import dbConnect from './DataBase/db.js';
import bodyParser from 'body-parser';
import { Router } from './Routes/router.js';
import swaggerui from 'swagger-ui-express';
import fs from 'fs';
const db=await dbConnect();
const port=5555;
const app=express();

const rawData=fs.readFileSync('./swagger-output.json')
const swaggerDocuments=JSON.parse(rawData)
app.use('/api-docs',swaggerui.serve,swaggerui.setup(swaggerDocuments))



app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/API',Router);

app.get('/',(req,res)=>{
    res.send(
     `<div>
     <h1>Home Page All API</h1>
     </div>`
    )
 })

app.listen((port),()=>{
    console.log(`server is now running on Port: ${port}`);
})
export default db;
