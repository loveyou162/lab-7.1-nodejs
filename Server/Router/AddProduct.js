const express = require("express");
const router = express.Router();

const ProductController = require("../controller/product");

// /admin/add-product => GET
router.get("/", ProductController.getAddProduct);
// /admin/add-product => POST
router.post("/", ProductController.postAddProduct);
module.exports = router;
