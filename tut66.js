
const http= require('http')

const fs = require('fs')

const fileContent= fs.readFileSync('tut61.html')

const Server = http.createServer((req,res) => {

    res.writeHead(200, { 'Content-type': 'text/html'})
    res.end(fileContent)
})

Server.listen(800, '127.0.0.1', ()=>{
    console.log("Listening on port 800")
});