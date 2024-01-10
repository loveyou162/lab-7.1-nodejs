const Product = require("../Model/product");
exports.getAddProduct = (req, res, next) => {
  // const { title, img, price, des } = req.body;
  Product.fetchAll((data) => {
    res.json(data);
  });
};
exports.postAddProduct = (req, res, next) => {
  const { title, img, price, des, id } = req.body;
  const product = new Product(title, img, price, des, id);
  product.save();
  res.json(product);
  // Product.createProduct({ title, img, price, des }, (newProduct) => {
  //   console.log("Sản phẩm đã được tạo:", newProduct);
  // });
};
