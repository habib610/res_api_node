import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    price: {type: Number, required: true},
    countInStock: {type: Number, required: true},
    category: {type: String, required: true},
    description: {type: String, required: true},
}, {
    timestamps: true
})

const Product = mongoose.Model("Product", productSchema)

export default Product