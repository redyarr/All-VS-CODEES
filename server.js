const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    
console.log("here");
res.send("helloooo");
});
app.listen(3000);


const port = process.env.PORT || 3000;

app.listen(port, ()=>{

    console.log(`server is running on port ${port}`);
})
