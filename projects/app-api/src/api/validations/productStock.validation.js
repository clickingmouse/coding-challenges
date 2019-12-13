const Joi = require("joi");

//

// joi is a new library,
// the big assumption is it checks the passed in data ( input validation - routes) and
// not the passed out data.  Else everything breaks
// `Product Stock Fields`
// | Field | Format | Optional |
// | - | - | :-: |
// | productId | string ||
// | originalAmount | float >= 0 ||
// | amount | float >= 0 ||
// | importedAt | date ||
// | expiredAt | date | yes |
// body: {
//   productId: Joi.string().required,
//   originalAmount: Joi.number().positive(),
//   amount: Joi.number().positive(),
//   importedAt: Joi.date().required,
//   expiredAt: Joi.date()
// }
//
// productId: 1,
// originalAmount: 66.66,
// amount: 55.55,
// importedAt: "2019-01-09T00:00:00+08:00",
// expiredAt: "2019-01-31T23:59:59+08:00"
// router
//   .route('/')
//   .get(controller.list)
//   .post(controller.create);
// router
//   .route('/:productStockId')
//   .patch(controller.update)
//   .delete(controller.remove);
module.exports = {
  // GET /v1/ProductStocks
  // in nothing needs to get passed in.
  //const productStocks = await PG.ProductStock.list(req.query);
  //
  // potential query options:
  //   originalAmount: Joi.number().positive(),
  //   amount: Joi.number().positive(),
  //   importedAt: Joi.date().required,
  //   expiredAt: Joi.date()
  //
  listProductStock: {
    /*
     *  WRITE YOUR CODE HERE
     */
    query: {
      originalAmount: Joi.number().positive(),
      amount: Joi.number().positive(),
      importedAt: Joi.date(),
      expiredAt: Joi.date()
    }
  },

  // POST /v1/ProductStocks
  //    const productStock = await PG.ProductStock.create(req.body);
  createProductStock: {
    /*
     *  WRITE YOUR CODE HERE
     */
    body: {
      productId: Joi.string().required,
      originalAmount: Joi.number().positive().required,
      amount: Joi.number().positive().required,
      importedAt: Joi.date().required,
      expiredAt: Joi.date()
    }
  },

  // PATCH /v1/ProductStocks/:ProductStockId
  // to update stock we need
  // 1: stock to update (product id)
  // 2: info of stock to update
  // const { productStockId } = req.params;
  // const updateParams = req.body;
  updateProductStock: {
    /*
     *  WRITE YOUR CODE HERE
     */
    params: {
      productId: Joi.string().required
    },
    body: {
      originalAmount: Joi.number().positive(),
      amount: Joi.number().positive(),
      importedAt: Joi.date(),
      expiredAt: Joi.date()
    }
  },

  // DELETE /v1/ProductStocks/:ProductStockId
  // const { productStockId } = req.params;
  removeProductStock: {
    /*
     *  WRITE YOUR CODE HERE
     */
    params: {
      productId: Joi.string().required
    }
  }
};
