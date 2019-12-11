const Joi = require("joi");

module.exports = {
  // GET /v1/ProductStocks
  listProductStock: {
    /*
     *  WRITE YOUR CODE HERE
     */
    // `Product Stock Fields`
    // | Field | Format | Optional |
    // | - | - | :-: |
    // | productId | string ||
    // | originalAmount | float >= 0 ||
    // | amount | float >= 0 ||
    // | importedAt | date ||
    // | expiredAt | date | yes |
    body: {
      productId: Joi.string().required,
      originalAmount: Joi.number().positive(),
      amount: Joi.number().positive(),
      importedAt: Joi.date().required,
      expiredAt: Joi.date()
    }
  },

  // POST /v1/ProductStocks
  createProductStock: {
    /*
     *  WRITE YOUR CODE HERE
     */
  },

  // PATCH /v1/ProductStocks/:ProductStockId
  updateProductStock: {
    /*
     *  WRITE YOUR CODE HERE
     */
  },

  // DELETE /v1/ProductStocks/:ProductStockId
  removeProductStock: {
    /*
     *  WRITE YOUR CODE HERE
     */
  }
};
