const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
{
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    marketPrice: {
        type: Number,
        required: true
    },

    stock: {
        type: Number,
        required: true
    },

    image: {
        type: String
    },

    vendorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Product", productSchema);