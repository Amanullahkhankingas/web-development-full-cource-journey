// console.log('this the app of express');

const express = require("express");
const { get } = require("http");

const app = express();
const path = require('path');

const fs = require('fs');

const port = 80;

//EXPRESS STUPP
app.use('/static',express.static('static'));  // For serving static files


//PUG TEMPLATE 
app.set('view engine', 'pug'); // Set the template engine as pug

app.set('views' , path.join(__dirname, 'views')); //Set the views directoty

app.use(express.urlencoded());



//PUG ENDPOINT
app.get('/' ,(req,res) => {
    
    res.status(200).render('index.pug',{"content":"this is the content in app.js link or assign to index.pug", "title":"this is the title of index.pug"});
});

app.post('/' ,(req ,res) => {
    console.log(req.body);

   Name = req.body.name
   age =req.body.age
   gender = req.body.gender
   address = req.body.address
   more = req.body.more

    let DataOfFormIs = `His name is ${Name} and he is ${age} year old,He is a ${gender} and his address is ${address},more about: ${more}`;

    fs.writeFileSync('dataOfClient3.txt', DataOfFormIs);

    const params = {"message": "Your message has been  submitted successfully"}
    res.status(200).render('index.pug',params);
});






//THIS IS THE SERVING POINT
app.listen(port, ( ) => {
    console.log(`server listen the app sucessfully on port ${port}`)
});
























//THIS IS THE CODE OF TUTORIAL 70 AND 71



// console.log('this the app of express');

// const express = require("express");

// const app = express();
// const path = require('path');

// const port = 80;

// // For serving static files
// app.use('/static',express.static('static'));

// // Set the template engine as pug
// app.set('view engine', 'pug');

// //Set the views directoty
// app.set('views' , path.join(__dirname, 'views')) 

// //Our pug demo endpoint
// app.get("/demo" , (req,res) =>{

//     res.status(200).render('demo', { title: 'Hey Amanullah', message: 'Hello Harry thanks for telling me  hoe to use pug!' });
// });




// app.get("/", (req,res) =>{

//     res.status(200).send('this is the home bar ');

    
// });
// app.get("/about", (req,res) =>{

//     res.send("this is the about page ENTERED");
// });
// app.post("/about", (req,res) =>{

//     res.send("this is the POST REQUEST  about page of my first express app with Harry");
// });

// app.get("/this" , (req,res) => {

//     res.status(404).send(" This page is not pound");
// })

// app.listen(port, ( ) => {
//     console.log(`server listen the app sucessfully on port ${port}`)
// });