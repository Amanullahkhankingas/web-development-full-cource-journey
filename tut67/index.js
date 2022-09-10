// const http = requrie('http');

// // const fs = requrie('fs');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer( (req,res) => {
//     res.statusCode = 200;
//     res.setHeader( 'Content-Type','text/plain');
//     res.end('Hellow World');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

//server code


const http = require('http');

const fs = require('fs');

const home = fs.readFileSync('./index.html');
const about = fs.readFileSync('./about.html');
const services = fs.readFileSync('./services.html');
const contect = fs.readFileSync('./contect.html');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

    console.log(req.url);

    url = req.url;

  res.statusCode = 200;
  res.setHeader( 'Content-Type', 'text/html');
 
//   res.end(home);
  if( url ==  '/'){
    res.end(home);
  }
  else if( url == '/about'){
    res.end(about);
  }
  else if(url == '/services'){
    res.end(services);
  }
  else if(url == '/contect'){
    res.end(contect);
  }
     else{
         
      res.statusCode = 404;
     res.end( "<h1>404 is not found</h1>");
  }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//  other  code


// const http = require('http');
// const fs = require('fs');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res)=>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('Hello World');

//     server.listen(port, hostname, () => {
//         console.log(`Server running at http://${hostname}:${port}/`)
//       });