const ProductModel = require("../model/product.model");

// create product controller
/**
 * 
 * @body {name,productImage:File,category,desc,price,mrp,discount,rating,review,stock,brand}
 * content-type: multipart/form-data
 * @response {message,data}
 * data: {
        "name": "new product",
        "poster": "http://localhost:8080/upload/product/1777378107428-noprofile.jpg",
        "images": [],
        "category": "undefined",
        "desc": "test test",
        "price": 8000,
        "mrp": 10000,
        "discount": 0,
        "rating": 5,
        "review": 0,
        "stock": 0,
        "brand": "generic",
        "isDeleted": false,
        "isActive": true,
        "productCode": "NEW-JHJ-677",
        "_id": "69f0a33b47fce4f4445a31c1",
        "createdAt": "2026-04-28T12:08:27.446Z",
        "updatedAt": "2026-04-28T12:08:27.446Z",
        "__v": 0}
 */
async function createProduct(req, res) {
  console.log("controller started createProduct")
  console.log(req.body)
  const payload = req.body;
  if (req.file) {
    let posterurl = `http://localhost:8080/${req.file.destination}/${req.file.filename}`;
    payload.poster = posterurl;
  } else {
    payload.poster = `http://jkhkjhkjh.com/img.png`;
  }

  try {
    const product = await ProductModel.create(payload);
    res.status(201).json({
      message: `${product.name} with code ${product.productCode} is added successfully`,
      data: product,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { createProduct };
