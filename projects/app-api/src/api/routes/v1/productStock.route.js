const express = require("express");
const validate = require("express-validation");
const controller = require("../../controllers/productStock.controller");
const validation = require("../../validations/productStock.validation");
const router = express.Router();

router
  .route("/")
  .get(validate(validation.listProductStock), controller.list)
  .post(validate(validation.createProductStock), controller.create);

router
  .route("/:productStockId")
  .patch(validate(validation.updateProductStock), controller.update)
  .delete(validate(validation.removeProductStock), controller.remove);

module.exports = router;
