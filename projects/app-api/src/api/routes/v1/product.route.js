const express = require("express");
const validate = require("express-validation");
const controller = require("../../controllers/product.controller");

const router = express.Router();

// router.route('/')
//   .get(controller.list)
//   .post(controller.create);

router
  .route("/")
  .get(controller.list)
  .post(controller.create);

// router.route('/', validate(validation.login))
//   .get(controller.list)
//   .post(controller.create);

router
  .route("/:productId")
  .patch(controller.update)
  .delete(controller.remove);

// Mission 2
// Enhance the products' listing API to allow filter by the product status:
// isAvailable: true | false
// API Endpoint
// GET /api/v1/product?isAvailable={IS_AVAILABLE}
//router.route("/:isAvailable").get(controller.listAvailable);
//---> this is implemented in product.controller instead

// Mission 3
// Implement a new API to provide a summary of a dealer's sugar stock. The summary should contains:

// Product ID
// Name of the product
// Total available amount at the moment of query
// Total expired amount at the moment of query
//API Endpoint
//GET /api/v1/product/summary

router.route("/summary").get(controller.listSummary);

module.exports = router;
