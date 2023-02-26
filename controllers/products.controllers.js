const ProductModel = require("../models/products.model");

async function get(req,res) {
    try{
        const products = await ProductModel.find();
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(products))
        res.end()
    }
    catch(error){

    }
}


async function getById(req,res) {
    try{
        // const [,,id] = req.url.split("/")
        const id = req.url.split("/")[3]
        const product = await ProductModel.findById(id);
        console.log(product)
        if (!product){
            res.writeHead(404, {'Content-Type': 'application/json'});
            res.write(JSON.stringify({messages: "Not Found any product"}))
            res.end()
        }
        else{
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(JSON.stringify(product))
            res.end()
        }
    }
    catch(error){

    }
}

const ProductsController = {
    get,
    getById
}

module.exports = ProductsController