// console.log('this is why because of hope ');


const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Allignment</title>
  
  
      <style>
          body {
              background-color: rgb(156 107 107);
          }
  
          * {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
  
          }
  
          .container {
              background-color: rgb(123 72 72);
              border: 4px solid border: 4px solid rgb(252, 139, 252);
              width: 920px;
              border-radius: 12px;
  
              margin: 12px auto;
              padding: 12px 12px;
          }
  
          #headone {
              color: rgb(255, 253, 253);
  
              margin: 12px auto;
              width: 320px;
          }
  
          .item {
              background-color: rgb(219 249 255);
              border: 4px solid red;
              width: 700px;
              border-radius: 12px;
              margin: 30px 6px;
              padding: 12px 30px;
  
          }
  
          h2,
          p {
              /* text-align: center; */
              /* text-align: right; */
              /* text-align: left; */
              /* text-align: justify; */
              text-align: start;
          }
  
          #computer {
  
              float: left;
              width: 48%;
  
  
  
          }
  
          #foods {
              float: left;
              width: 48%;
  
  
          }
  
          #stationary {
              width: 100%;
              clear: left;
  
  
          }
  
          #stationary2 {
              width: 100%;
              clear: left;
  
  
          }
      </style>
  </head>
  
  <body>
  
  
  
      <div class="container">
  
  
          <h1 id="headone">Welcome To Store</h1>
  
  
          <div id="computer" class="item">
              <h2>computer</h2>
  
              <p id="computerpara" class="para">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam debitis vitae asperiores, maxime eum hic?
                  Nulla placeat repellendus repellat Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id,
                  exercitationem. Libero, neque? Vel, ad! Modi quos, porro dignissimos eum repudiandae id aspernatur. Ea
                  facilis voluptas commodi iusto est placeat perspiciatis.
              </p>
          </div>
          <div id="foods" class="item">
              <h2>foods</h2>
  
              <p id="foodspara" class="para">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam debitis vitae asperiores, maxime eum hic?
                  Nulla placeat repellendus repellat Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id,
                  exercitationem. Libero, neque? Vel, ad! Modi quos, porro dignissimos eum repudiandae id aspernatur. Ea
                  facilis voluptas commodi iusto est placeat perspiciatis.
              </p>
          </div>
          <div id="stationary" class="item">
              <h2>stationary</h2>
  
              <p id="stationarypara" class="para">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam debitis vitae asperiores, maxime eum hic?
                  Nulla placeat repellendus repellat Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id,
                  exercitationem. Libero, neque? Vel, ad! Modi quos, porro dignissimos eum repudiandae id aspernatur. Ea
                  facilis voluptas commodi iusto est placeat perspiciatis.
              </p>
          </div>
          <div id="stationary2" class="item">
              <h2>stationary2</h2>
  
              <p id="stationarypara2" class="para">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam debitis vitae asperiores, maxime eum hic?
                  Nulla placeat repellendus repellat Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id,
                  exercitationem. Libero, neque? Vel, ad! Modi quos, porro dignissimos eum repudiandae id aspernatur. Ea
                  facilis voluptas commodi iusto est placeat perspiciatis.
              </p>
          </div>
  
      </div>
  
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});