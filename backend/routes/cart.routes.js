const { addToCart, getUserCart } = require("../controllers/cart.controller");

const router = require("express").Router();

//end points
router.post("/add",addToCart)
router.get("/getAll/:userId",getUserCart)

module.exports = router;
