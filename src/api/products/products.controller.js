const productService = require("./products.service");

const findById = async (req, res) => {
  const product = await productServiceI.findById(req.params.productId);
  res.json({ status: "success", data: product });
};

const deleteById = async (req, res) => {
  const product = await productService.findById(req.params.productId);
  res.json({ status: "deleted", data: product });
};

const find = async (req, res) => {
  const product = await productService.find();
  res.json({ status: "success", data: product });
};

const save = async (req, res) => {
  const product = req.body;
  const updatedProduct = await productService.save(product);
  res.json({ status: "success", data: { product: updatedProduct } });
};



module.exports = { findById, find, save, deleteById };
