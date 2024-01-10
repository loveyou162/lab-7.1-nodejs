const express = require("express");
const router = express.Router();
const shopController = require("../controller/shop");
// /admin/add-product => GET
// router.get("/add-product");
// /admin/add-product => POST
router.post("/", shopController.postProducts);
router.get("/cart", shopController.getCart);
router.post("/cart", shopController.postCart);
module.exports = router;
