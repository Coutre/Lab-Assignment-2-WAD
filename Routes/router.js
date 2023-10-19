const express = require('express');
const router = express.Router();
const product = require('../Models/product');


// get all
router.get('/', async (req, res) => {
    const query = req.query;
    if(query == {}){
        const products = await product.find();
        res.json(products);
    }
    else{
        const products = await product.find(query);
        res.json(products); 
    }
    console.log(query); 
})
// get one
router.get('/:id', async (req, res) => {
    const products = await product.find({_id: req.params.id});
    res.json(products);
})
// post one
router.post('/', async (req, res) => {
    const products = new product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity,
        category: req.body.category
    });
    await products.save();
})
// update one
router.patch('/:id', async (req, res) => {
    await product.updateOne({_id: req.params.id}, req.body);
})
// delete one
router.delete('/:id', async (req, res) => {
    await product.deleteOne({_id: req.params.id});
    console.log("Object had been deleted");
})
//delete all
router.delete('/', async( req, res) => {
    await product.deleteMany({});
})

module.exports = router