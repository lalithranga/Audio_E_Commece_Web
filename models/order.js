import mongoose from 'mongoose';

const { Schema } = mongoose;

const orderSchema = new Schema({
    orderID: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    orderDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    orderItems: [
        {
            product: {
                key: {
                    type: String,
                    required: true
                },
                name: {
                    type: String,
                    required: true
                },
                price: {
                    type: Number,
                    required: true
                },
                images: {
                    type: String,
                    required: true
                }
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
    oneDayCost: {
        type: Number,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    startingDate: {
        type: Date,
        required: true
    },
    endingDate: {
        type: Date,
        required: true
    },
    days: {
        type: Number,
        required: true
    },
    isApproved: {
        type: Boolean,
        default: false,
        required: true
    }
    
});

const Order = mongoose.model('OrderList', orderSchema);

export default Order;
