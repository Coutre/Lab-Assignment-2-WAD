const mongoose = require('mongoose');
const schema = mongoose.Schema;

const productSchema = new schema({
    name: String,
    description: String,
    price: Number,
    quantity: Number,
    category: String
});

module.exports = mongoose.model('Product', productSchema);