const http = require('http')
// const { url } = require('inspector')
const ProductsContoller = require("./controllers/products.controllers")
const PORT= 3000
const server = http.createServer((req, res) => {

    if(req.url == "/api/products"){
        ProductsContoller.get(req,res)
    }
    else{
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({message: "NotFound"}))
        res.end()
    }



})

server.listen(PORT)
console.log("Server is running" + PORT)