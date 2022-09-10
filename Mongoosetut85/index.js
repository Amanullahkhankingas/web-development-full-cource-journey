//getting-started.js

var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/harryKart',{useNewUrlParser: true});  //useUnifiedTopology: true


var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));
// db.once('open' , function() {

//     //we are reconnected!
//     console.log("We are connected lowray");
// });




var kittySchema = new mongoose.Schema({

    name: String

});


kittySchema.methods.speak = function () {
     var greeting = "My name is " + this.name
    //  console.log(greeting);
}



var kitten = mongoose.model('amanullah', kittySchema);

// var silence = new kitten({name: "Silence"});
// console.log(silence.name);  //'Silence

var harryKitty = new kitten({name: "harryKitty"});
var harryKitty2 = new kitten({name: "harryKitty2324"});
var kolar = new kitten({name: "Mr.kolder"});
//  console.log(harryKitty.name);  

// harryKitty.speak();           //this is the element of "greetiog"

harryKitty.save(function (err, harryKitty){
    if(err) return console.error(err);
    harryKitty.speak();
});
harryKitty2.save(function (err, harryKitty2){
    if(err) return console.error(err);
    harryKitty2.speak();
});
kolar.save(function (err, kolar){
    if(err) return console.error(err);
    kolar.speak();
});

      // finding 

    //   kitten.find(function (err, kittens){
    //       if(ree) return console.error(err);
    //       console.log(kittens);
    //   })
     
      kitten.find( {name: "Mr.kolder"},function (err, kittens){
          if(err) return console.error(err);
          console.log(kittens);
      });

