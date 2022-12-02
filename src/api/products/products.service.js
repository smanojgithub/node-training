const Product = require("./products.model");
const findById = async (id) => {
  return await Product.findById(id);
};

const find = async () => {
  return await Product.find();
};

const save = async (productData) => {
  const product = new Product(productData);
  return await product.save();
};
// const saveMany = async(product)
const deleteById = async (productData) => {
  const product = new Product(productData);
};
module.exports = { findById, find, save, deleteById };
