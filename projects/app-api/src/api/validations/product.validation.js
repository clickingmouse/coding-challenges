const Joi = require("joi");

module.exports = {
  // GET /v1/products
  listProduct: {
    /*
     *  WRITE YOUR CODE HERE
     */

    // `Product Fields`
    // | Field | Format | Optional |
    // | - | - | :-: |
    // | name | string ||
    // | sweetiness | integer 1-10 | yes|
    // | isAvailable | boolean ||
    body: {
      name: Joi.string().required,
      sweetness: Joi.number()
        .integer()
        .min(1)
        .max(10),
      isAvailable: Joi.boolean().required
    }
  },

  // POST /v1/products
  createProduct: {
    /*
     *  WRITE YOUR CODE HERE
     */
  },

  // PATCH /v1/products/:productId
  updateProduct: {
    /*
     *  WRITE YOUR CODE HERE
     */
  },

  // DELETE /v1/products/:productId
  removeProduct: {
    /*
     *  WRITE YOUR CODE HERE
     */
  }
};
