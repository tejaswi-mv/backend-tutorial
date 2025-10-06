const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for an item
const itemSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true // Removes whitespace from both ends
    },
    quantity: {
        type: Number,
        required: true,
        min: 0 // Quantity cannot be negative
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Create a model from the schema and export it
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;