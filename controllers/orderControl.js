
import Order from "../models/order.js";
import Product from "../models/product.js";

export async function AddOrder(req, res) {
    const data = req.body;

    const orderInfo = {
        orderItems: []
    };
   

    if (req.user == null) {
        res.status(401).json({ message: "Please login and try again" });
        return;
    }
    if (data.orderItems == null || data.orderItems.length == 0) {
        res.status(400).json({ message: "Order items are required" });

        return;
    }
    orderInfo.email = req.user.email;
    orderInfo.user = req.user.first_name + " " + req.user.last_name;

    const lastOrder = await Order.find().sort({ _id: -1 }).limit(1);
    if (lastOrder.length == 0) {
        orderInfo.orderID = "ORD001";
    } else {
        const lastorderID = lastOrder[0].orderID;
        const lastOrderNoString = lastorderID.replace("ORD", "");
        const nextOrderNo = parseInt(lastOrderNoString) + 1;
        const nextOrderNoString = nextOrderNo.toString().padStart(3, "0");
        orderInfo.orderID = "ORD" + nextOrderNoString;
    }
    let oneDayCost = 0;
    for (let i = 0; i < data.orderItems.length; i++) {
        try {
           
            
            const product = await Product.findOne({ key: data.orderItems[i].key });

            if (product == null) {
                res.status(400).json({ message: "Product with key " + data.orderItems[i].key + " is not available" });
                return;
            }
            orderInfo.orderItems.push({
                product: {
                    key: product.key,
                    name: product.name,
                    price: product.price,
                    images: product.images[0]
                },
                quantity: data.orderItems[i].quantity
            });
            oneDayCost += product.price * data.orderItems[i].quantity;
        } catch (error) {
            res.status(500).json({ error: "Failed to create order" });
            return;
        }
    }
    orderInfo.oneDayCost = oneDayCost;
    orderInfo.totalAmount = oneDayCost * data.days;
    orderInfo.startingDate = data.startingDate;
    orderInfo.endingDate = data.endingDate;
    orderInfo.days = data.days;

    try {
        const order = new Order(orderInfo);
        const savedOrder = await order.save();
        res.status(201).json({
            message: "Order created successfully",
            order: savedOrder
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to create order" });
    }
    console.log(new Date());
}
