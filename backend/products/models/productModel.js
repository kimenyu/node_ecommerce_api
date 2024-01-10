const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a product name"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Please provide a product description"],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, "Please provide a product price"],
        trim: true,
    },
    image: {
        type: String,
        required: [true, "Please provide a product image"],
        trim: true,
    },
    category: {
        type: String,
        required: [true, "Please provide a product category"],
        trim: true,
    },
    quantity: {
        type: Number,
        required: [true, "Please provide a product quantity"],
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Product", productSchema);
