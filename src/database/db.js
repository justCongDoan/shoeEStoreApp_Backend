const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://justDoan:1D8bhAKVTZMZ6gek@cluster0.lovcawt.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri);

const database = client.db('shoeEStore_DB');
const products = database.collection('products');
const orders = database.collection('orders');

module.exports = {
    products,
    orders,
};