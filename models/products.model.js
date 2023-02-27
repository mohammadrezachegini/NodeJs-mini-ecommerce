// const products  = require('./../data/products.json')
const MongoConnection = require("../utils/mongo-connection")
// const db = new MongoConnection()
const fs = require('fs')
const {ObjectId} = require("mongodb");
const ProductCollection = "product"

async function find() {
    const db = await new MongoConnection().Get();
    return new Promise(async (resolve, reject) => {
        const products = await db.collection(ProductCollection).find({
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
        const product = await db.collection(ProductCollection).findOne({_id: new ObjectId((id))})
        resolve(product)
    })

}

async function create(product) {
    const db = await new MongoConnection().Get();
    return new Promise(async (resolve, reject) => {
        const result = await db.collection(ProductCollection).insertOne(product)
        resolve(result);
    })

}

async function update(id,payload) {
    const db = await new MongoConnection().Get();
    return new Promise(async (resolve, reject) => {
        const result = await db.collection(ProductCollection).updateOne({_id: new ObjectId(id)},{
            $set: {...product}
        })
        resolve(result);

    })

}



async function remove(id) {
    const db = await new MongoConnection().Get();
    return new Promise(async (resolve, reject) => {
        const result = await db.collection(ProductCollection).deleteOne({_id: new ObjectId(id)})
        resolve(result);

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