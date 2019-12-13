const httpStatus = require("http-status");

/**
 * Create new product
 * @public
 */
exports.create = async (req, res, next) => {
  try {
    const product = await PG.Product.create(req.body);

    res.status(httpStatus.CREATED);
    res.json(product.transform());
  } catch (error) {
    next(error);
  }
};

/**
 * Get product list
 * @public
 */
exports.list = async (req, res, next) => {
  console.log("list:params:query", req.param("isAvailable"), req.query);

  //if (req.param("isAvailableXXXX")) {
  //console.log("isAvailable present");
  try {
    //+ req.query would grab the isAvailable here KKO
    console.log("controller.listAvalable");
    const products = await PG.Product.listAvailable(req.query);
    //console.log("product.controller->products", products);
    const transformedProducts = products.map(product => product.transform());
    res.json(transformedProducts);
  } catch (error) {
    next(error);
  }
  // } else {
  // console.log("isAvailable not present");

  // try {
  //   const products = await PG.Product.list(req.query);
  //   const transformedProducts = products.map(product => product.transform());
  //   res.json(transformedProducts);
  // } catch (error) {
  //   next(error);
  // }
  //}
};

//below not used
exports.listAvailable = async (req, res, next) => {
  try {
    //+ req.query would grab the isAvailable here KKO
    console.log("controller.listAvalable");
    const products = await PG.Product.listAvailable(req.query);
    const transformedProducts = products.map(product => product.transform());
    res.json(transformedProducts);
  } catch (error) {
    next(error);
  }
};

exports.listSummary = async (req, res, next) => {
  try {
    const products = await PG.Product.listSummary(req.query);
    console.log("product.controller->products", products);
    res.json(products[0]);
    const transformedProducts = products.map(product => product.transform());
    res.json(transformedProducts);
  } catch (error) {
    next(error);
  }
};

/**
 * Update existing product
 * @public
 */
exports.update = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const updateParams = req.body;

    const [, updatedProduct] = await PG.Product.update(updateParams, {
      where: {
        id: productId
      },
      returning: true
    });

    res.json(updatedProduct[0].transform());
  } catch (error) {
    next(error);
  }
};

/**
 * Delete product
 * @public
 */
exports.remove = async (req, res, next) => {
  try {
    const { productId } = req.params;

    await PG.Product.destroy({
      where: {
        id: productId
      }
    });

    res.status(httpStatus.NO_CONTENT).end();
  } catch (error) {
    next(error);
  }
};
