const {Router} = require('express');
const orederrouter= Router();
const user=require('../Model/userModel')
orderrouter.post('/place', auth ,async(req,res)=>{
    try{
        const {email} = req.user
        const {orderItems,shippingAddress}=req.body;
        if(!email){
            return res.status(400).json({message:"Please provide the email"});
        }
        if(!orderItems || !Array.isArray(orderItems) || orderItems.length===0){
            return res.status(400).json({message:"Please provide the order items"});
        }
        if(!shippingAddress){
            return res.status(400).json({message:"Please provide the shipping address"});
        }
        const user = await user.findOne({email});
        if(!user){
            return res.status(400).json({message:"User not found"});
        }
        const orderpromise = orderItems.map(async(item)=>{
            const totalAmount = item.price*item.quantity;
            const order = new orders({
                userId:user._id,
                orderItems :[item],
                shippingAddress,
                totalAmount
            });
            return order.save();
        })
        const orders = await Promise.all(orderpromise);
        const arr = user.cart
        arr.splice(0, arr.length)
        res.status(201).json({message:'orders place and cart cleared successfully', orders});
    }
    catch(err){
        console.log('Error placing orders', err)
        res.status(500).json({message: error.message})
    }
})

orderrouter.get('/getorder', auth, async(req, res)=>{
    try{
        const email = req.user;
        if(!email){
            return res.status(404).json({message:'not found'})
        }
        const orderhistory = await orders.find({email})
        console.log(orderhistory)
        res.status(200).json({message :' placed successfully'})
    }catch(err){
        console.log(err)
    }

})

orderrouter.patch('/cancel-order/:orderId', auth, async(req, res)=>{
    try{
        const {orderId} = req.params;
        
        const mail = req.user;
        if(!orderId){
            return res.status(404).json({message:'order not found'})
        }
        const order = await orders.findOne({_id:orderId})
        if(!order){
            return res.status(404).json({message:'order not found'})
        }
        order.orderstatus == ['cancelled']
        await order.save();
            
        
        if(order.orderstatus == ['delivered']){
            return res.status(400).json({message:'order already delivered'})
        }
        
    }catch(err){
        console.log(err)
        res.status(500).json({message: error.message})
    }
});

module.exports=orderrouter;