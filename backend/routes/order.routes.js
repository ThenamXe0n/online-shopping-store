const { generateOrder,getOrdersByUserId } = require("../controllers/order.controller");

const router = require("express").Router();


router.post("/generate", generateOrder);
router.get("/:userId/getall", getOrdersByUserId);

module.exports = router;