const express = require('express')  //put value
const app =express()      //calling


// Request(req)/Response(res) cycle
app.get('/',(req, res) =>{
    res.send('I am in hello Page');
});

app.get('/about',(req, res) =>{
    res.send('I am in hello Page');
});

app.get('/contact',(req, res) =>{
    res.send('I am in contact Page');
});

//port no : 1300-65000, 1300 vanda tala chai internet system le use garirahunchha
app.listen(3000, function(){
    console.log("Node js project has started at port 3000");
})