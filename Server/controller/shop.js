const Carts = require("../Model/cart");

exports.postProducts = (req, res, next) => {
  res.json();
};
exports.postCart = (req, res, next) => {
  console.log(7, req.body);

  const prodId = req.body.id;
  const productPrice = req.body.price;
  console.log(prodId);
  if (!prodId || !productPrice) {
    return res.status(400).json({ message: "Invalid request" });
  }
  Carts.addCart(prodId, productPrice);
  res.status(201).json({ message: "Product added to cart successfully" });
};
exports.getCart = (req, res) => {
  Carts.fetchAll((data) => {
    res.json(data);
  });
};
