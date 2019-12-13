const Joi = require("joi");
//"joi": "^10.4.1",
// `Product Fields`
// | Field | Format | Optional |
// | - | - | :-: |
// | name | string ||
// | sweetiness | integer 1-10 | yes|
// | isAvailable | boolean ||
// body: {
//   name: Joi.string().required,
//   sweetness: Joi.number()
//     .integer()
//     .min(1)
//     .max(10),
//   isAvailable: Joi.boolean().required
// }
module.exports = {
  // GET /v1/products
  // to list products, we dont need to pass in anything
  // for test purposes, leave this blank too?
  // req.query options;
  listProduct: {
    /*
     *  WRITE YOUR CODE HERE
     */
    query: {
      sweetiness: Joi.number()
        .integer()
        .min(1)
        .max(10),
      isAvailable: Joi.boolean(),
      color: Joi.string()
    }
  },

  // POST /v1/products
  // to create product, we need the minimum amount of information to push in a new product
  // ie name | isAvailable <- theoretically is not needed but its in the design as required
  //const product = await PG.Product.create(req.body);
  // {
  //   name: "Earth Sugar",
  //   sweetiness: 1,
  //   color: "blue",
  //   isAvailable: true
  // },
  // color????

  createProduct: {
    /*
     *  WRITE YOUR CODE HERE
     */
    // should have a req.body with minimum req to create new product
    //color is optional when checked in the db
    body: {
      name: Joi.string().required,
      sweetiness: Joi.number()
        .integer()
        .min(1)
        .max(10),
      color: Joi.string(),
      isAvailable: Joi.boolean().required
    }
  },

  // PATCH /v1/products/:productId
  // to update product should pass in at least one of data to update
  // under assumption we can update any meta data except productid
  // name | sweetiness | isAvailable
  // const { productId } = req.params;
  // const updateParams = req.body;
  updateProduct: {
    /*
     *  WRITE YOUR CODE HERE
     */
    // should have a req.body with at least one meta data to update
    params: {
      productId: Joi.number()
        .integer()
        .positive()
    },
    body: {
      sweetiness: Joi.number()
        .integer()
        .min(1)
        .max(10),
      isAvailable: Joi.boolean(),
      color: Joi.string()
    }
  },

  // DELETE /v1/products/:productId
  // nothing needs to passed in excep product id to delete data
  //req.params?
  //  const { productId } = req.params;
  removeProduct: {
    /*
     *  WRITE YOUR CODE HERE
     */
    params: {
      productId: Joi.number()
        .integer()
        .positive()
    }
  }
};
