const mongoose = require('mongoose');

const url = "mongodb+srv://abrt:aakashrijul@ecommerce.sf8yoma.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Database Connected Succesfully..");
}).catch((e)=>{
    console.log("Error Occured While Connecting with database");
    console.log("Error ->", e);
})