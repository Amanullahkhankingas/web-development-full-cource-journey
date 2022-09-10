      //Synchronous or blocking
      // -line by line execution

      //Asynchronous or non-blocking
      // line by line execution not guaranted

       const fs = require("fs");
     fs.readFile("the.txt" , "utf-8" , (err,data) =>{
          console.log(err,data);
      });
    //   console.log(text);


       console.log('this the message did you understand');