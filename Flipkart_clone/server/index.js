const DefaultData = require('./default.js')
const express = require('express');
const app=express();
//db connection
require('./db/Connection');
app.listen(8000,()=>{
    console.log("Server is Listening on port 8000");
})
DefaultData();