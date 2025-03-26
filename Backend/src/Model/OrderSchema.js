const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "Please provide the user ID"],
    },
 
    OrderItems: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            image:{
                type: String,
                required: true,
            }
        }
    ],
    shippingAddress: {
        country: {
            type: String,
            required: true,
        },
        city:{
            type: String,
            required: true,
        },
        address1:{
            type: String,
            required: true,
        },
        address2:{
            type: String,
            required: true,
        },
        zipCode:{
            type: Number,
            required: true,
        },
        addressType:{
            type: String,
            required: true,
        },
    },
    totalAmount: {
        type: Number,
        required: true,
        default: 0.0,
    },
    orderStatus: {
        type: String,
        enum :['Processing', 'Shipped', 'Delivered', 'Cancelled'],
        default: 'Processing',
    },
    deliveredAt: {
        type: Date,
    },
   
},
{
    timestamps: true,
}); 

const orders = mongoose.model('Order', orderSchema);
module.exports = orders;


