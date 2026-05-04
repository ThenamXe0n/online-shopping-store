const { addToCart, getUserCart } = require("../controllers/cart.controller");
const { isLoggedIn } = require("../middleware/auth.middleware");

const router = require("express").Router();

//end points
router.post("/add",isLoggedIn,addToCart)
router.get("/getAll/userItems",isLoggedIn,getUserCart)

module.exports = router;
