const http = require('http')
// const { url } = require('inspector')
const ProductsController = require("./controllers/products.controllers")
const ErrorHandler = require("./controllers/errorHandler.controller")
const PORT= 3000
const server = http.createServer((req, res) => {

    if(req.url == "/api/products"){
        ProductsController.get(req,res)
    } else if(req.url.match(/\/api\/products\/[0-9]+/)){
        // res.end(req.url.split("/").length.toString());
        ProductsController.getById(req,res);
    }
    else{
        ErrorHandler.notFound(res)
    }



})

server.listen(PORT)
console.log("Server is running" + PORT)