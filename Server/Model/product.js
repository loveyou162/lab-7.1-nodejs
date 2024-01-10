const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(require.main.filename),
  "datas",
  "products.json"
);
console.log(p);
const getProductFromFile = (cb) => {
  fs.readFile(p, (err, data) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(data));
    }
  });
};

module.exports = class Product {
  constructor(title, img, price, des, id) {
    this.title = title;
    this.img = img;
    this.price = price;
    this.des = des;
    this.id = id;
  }

  save() {
    getProductFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) {
          console.log(err);
          return;
        }
      });
    });
  }

  static fetchAll(cb) {
    getProductFromFile(cb);
  }

  // static createProduct(data, cb) {
  //   const { title, img, price, des } = data;
  //   const newProduct = new Product(title, img, price, des);
  //   getProductFromFile((products) => {
  //     products.push(newProduct);
  //     fs.writeFile(p, JSON.stringify(products), (err) => {
  //       if (err) {
  //         console.log(err);
  //         return;
  //       }
  //       cb(newProduct);
  //     });
  //   });
  // }
};
