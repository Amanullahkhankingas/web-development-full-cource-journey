

const express = require("express");


const app = express();
const path = require('path');

const mongoose = require('mongoose');
// const bodyparser = require('body-parser');



mongoose.connect('mongodb://localhost:27017/DataOfContact', {useNewUrlParser: true});


// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://localhost:27017/DataOfContect');
// }

const contectSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String

  });

  const contect = mongoose.model('contect', contectSchema);



const port = 80;

//EXPRESS STUPP
app.use('/static',express.static('static'));  // For serving static files


//PUG TEMPLATE 
app.set('view engine', 'pug'); // Set the template engine as pug

app.set('views' , path.join(__dirname, 'views')); //Set the views directoty

app.use(express.urlencoded());
// app.use(express.urlencoded())



//PUG ENDPOINT
// app.get('/' ,(req,res) => {
    
//     res.status(200).render('index.pug');
// });

app.get('/' ,(req,res) => {
    
    res.status(200).render('home.pug');
});
 app.get('/contect' ,( req,res) => {

    res.status(200).render('contect');
 });

 app.post('/contect' ,( req,res) => {
      
    var myData = new contect(req.body)
    myData.save().then(() => {
        res.send("Your data is saved successfully in our system")
    }).catch(() => {
        res.status(400).send(" Error accure while data saving process ")
    })

    // res.status(200).render('contect');
 });







//THIS IS THE SERVING POINT
app.listen(port, ( ) => {
    console.log(`server listen the app sucessfully on port ${port}`)
});



