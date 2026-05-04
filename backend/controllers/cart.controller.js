const CartModel = require("../model/cart.model");
/**
 *
 * @body {product:ObjectId,user:ObjectId,quantity:Number} req
 */
async function addToCart(req, res) {
  try {
    const cart = await CartModel.create({...req.body,user:req.userId});
    const findItem = await CartModel.findById(cart._id).populate("product", "poster name price mrp discount")
    res.status(201).json({ message: `product added to cart`, data: findItem });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
async function getUserCart(req, res) {
  try {
    const cart = await CartModel.find({ user: req.userId })
      .populate("product", "poster name price mrp discount")
      .populate("user", "name email");
    if (cart.length < 1) {
      return res
        .status(404)
        .json({ message: "not items found . please add items to cart" });
    }
    res.status(200).json({ message: `cart fetched`, data: cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { addToCart, getUserCart };
