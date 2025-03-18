const mongoose = require('mongoose');

const orderSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "Please provide the user ID"],
    },
    // address: {
    //     type: Object,
    //     required: [true, "Please provide the address ID"],
    // },
    // items: {
    //     type: [String],
    //     required: [true, "Please provide the order items"],
    // },
    // totalPrice: {
    //     type: Number,
    //     required: [true, "Please provide the total price"],
    // },
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

const orders = model('Order', orderSchema);
module.exports = orders;


