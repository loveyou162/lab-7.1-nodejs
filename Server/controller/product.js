const Product = require("../Model/product");
exports.getAddProduct = (req, res, next) => {
  // const { title, img, price, des } = req.body;
  Product.fetchAll((data) => {
    res.json(data);
  });
};
exports.postAddProduct = (req, res, next) => {
  const { title, img, price, des } = req.body;

  Product.createProduct({ title, img, price, des }, (newProduct) => {
    console.log("Sản phẩm đã được tạo:", newProduct);
    res.json(newProduct);
  });
};
