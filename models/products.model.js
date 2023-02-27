// const products  = require('./../data/products.json')
const MongoConnection = require("../utils/mongo-connection")
// const db = new MongoConnection()
const fs = require('fs')
const {ObjectId} = require("mongodb");


async function find() {
    const db = await new MongoConnection().Get();
    return new Promise(async (resolve, reject) => {
        const products = await db.collection("product").find({
            sort: {
                _id: -1
            }
        }).toArray();
        resolve(products)
    })

}

async function findById(id) {
    const db = await new MongoConnection().Get();
    return new Promise(async (resolve, reject) => {
        const product = await db.collection("product").findOne({_id: new ObjectId((id))})
        resolve(product)
    })

}

async function create(product) {
    const db = await new MongoConnection().Get();
    return new Promise(async (resolve, reject) => {
        const result = await db.collection("products").insertOne(product)
        resolve(result);
    })

}

async function update(id,payload) {
    return new Promise((resolve, reject) => {
        products.map(product => {
            if(product.id == id){
                Object.assign(product,payload);

            }

            return product;
        })

        fs.writeFile(`${process.cwd()}/data/products.json`, JSON.stringify(products), (err) => {
            if(err){
                reject(err)
            }
            else{
                resolve({message: "update product successfully "})
            }

        });

    })

}



async function remove(id) {
    return new Promise((resolve, reject) => {
        const newList = products.filter(product => product.id != id);
        fs.writeFile(`${process.cwd()}/data/products.json`, JSON.stringify(newList), (err) => {
            if(err){
                reject(err)
            }
            else{
                resolve({message: "deleted product successfully "})
            }

        });

    })

}




const ProductModel = {
    find,
    findById,
    create,
    update,
    remove
}

module.exports = ProductModel