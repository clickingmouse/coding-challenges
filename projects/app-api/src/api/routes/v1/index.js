const express = require("express");
const productRoutes = require("./product.route");
const productStockRoutes = require("./productStock.route");

const router = express.Router();

/**
 * GET v1/status
 */
router.get("/status", (req, res) => res.send("OK"));

/**
 * GET v1/product
 */
router.use("/product", productRoutes);

/**
 * GET v1/productStock
 */
router.use("/productStock", productStockRoutes);

module.exports = router;
