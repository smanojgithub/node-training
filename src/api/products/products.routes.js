const express = require("express");
const { findById, find, save ,deleteById} = require("./products.controller");
const router = express.Router();

router.get("/", find);
router.get("/productId", findById);
router.post("/", save);
router.delete("/delete",deleteById)

module.exports = router;
