const upload = require("../config/multer");
const { createProduct } = require("../controllers/product.controller");

const router = require("express").Router();

//api endpoint or routers
router.post("/",upload.single("productImage"), createProduct);

module.exports = router;
