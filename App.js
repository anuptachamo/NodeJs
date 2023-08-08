const express = require('express');  //put value
const { users } = require('./model/index');
const app =express()      //calling

//require database
require("./model/index")


//setting up ejs, telling nodejs to use ejs
app.set('view engine', 'ejs')

// Request(req)/Response(res) cycle
app.get('/',(req, res) =>{
    res.render('home.ejs', {name:'Anup',age:'21'});
});


app.use(express.json());
app.use(express.urlencoded({extended:true}));

//setting
app.post('/register', async(req, res ) =>{
    console.log(req.body.name);
    console.log(req.body.password);

// traditional/old step
    // const name =re.body.name
    // const password =re.body.password
    // console.log(name,password)


    //database ma halnu paryo
    await users.create({
        name : req.body.name,
        password : req.body.password
    })


    res.redirect('/about')
})



app.get('/about',(req, res) =>{
    res.render('about.ejs');
});

app.get('/contact',(req, res) =>{
    res.send('I am in contact Page');
});

//port no : 1300-65000, 1300 vanda tala chai internet system le use garirahunchha
app.listen(3000, function(){
    console.log("Node js project has started at port 3000");
})