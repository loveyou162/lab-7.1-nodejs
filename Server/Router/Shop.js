const express = require("express");
const routes = express.Router();
// /admin/add-product => GET
// router.get("/add-product");
// /admin/add-product => POST
routes.post("/", (req, res, next) => {
  res.json();
});
module.exports = routes;
