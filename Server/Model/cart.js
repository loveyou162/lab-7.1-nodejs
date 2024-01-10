const uuid = require("uuid");
const path = require("path");
const fs = require("fs");
const p = path.join(path.dirname(require.main.filename), "datas", "carts.json");
console.log(p);

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb({
        products: [],
        totalPrice: 0,
      });
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Cart {
  constructor() {
    this.id = uuid.v4();
  }
  static addCart(id, productPrice) {
    getProductsFromFile((carts) => {
      const existingProductIndex = carts.products.findIndex((p) => p.id === id);
      //nếu sản phẩm tồn tại tăng quantity lên 1
      if (existingProductIndex !== -1) {
        carts.products[existingProductIndex].qty += 1;
      } else {
        carts.products.push({ id: id, qty: 1 });
      }
      //cập nhật lại totalPrice
      carts.totalPrice += +productPrice;

      //ghi dữ liệu mới vào carts.json
      fs.writeFile(p, JSON.stringify(carts), (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
