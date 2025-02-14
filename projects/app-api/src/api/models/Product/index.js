const Sequelize = require("sequelize");
const httpStatus = require("http-status");
const { isNil, omit, omitBy } = require("lodash");

const { DataTypes } = Sequelize;
const logger = require("../../../config/logger");
const APIError = require("../../utils/APIError");
const seed = require("./seed");
const Op = Sequelize.Op;

//Hapi Joi is an object schema description language and validator for JavaScript objects.

//https://github.com/andrewkeig/express-validation
//is simply an object, which uses https://github.com/spumko/joi to define validation rules for a request.
//encapsulated inside body; which is important; as this defines their location, alternatives being, params, query, headers and cookies.

class Product extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        sweetiness: {
          type: DataTypes.STRING
        },
        color: {
          type: DataTypes.STRING
        },
        isAvailable: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
          allowNull: false
        }
      },
      {
        sequelize,
        modelName: "product"
      }
    );
  }

  static associate(models) {
    this.hasMany(models.ProductStock);
  }

  static async get(id) {
    try {
      const product = await this.findOne(id);

      if (product) {
        return product;
      }

      throw new APIError({
        message: "Product does not exist",
        status: httpStatus.NOT_FOUND
      });
    } catch (error) {
      throw error;
    }
  }

  static list({ page = 1, perPage = 30, productId, isAvailable, isExpired }) {
    // console.log("modles/product/index :: list : productId?", productId);
    // console.log("modles/product/index :: list : isAvailable?", isAvailable);
    // console.log("modles/product/index :: list : isExpired?", isExpired);

    try {
      // //+ modifiy query to filter isAvailable=T/F and/or isExpired = T/F KK
      console.log(isNil(isAvailable));
      console.log(omitBy(isAvailable, isNil));
      var where = {
        ...omitBy(productId, isNil)
        //did not work,
        //isAvailable: isNil(isAvailable)
        //...omitBy(isAvailable, isNil)
      };

      //
      if (isAvailable) {
        where = { ...where, isAvailable: true };
      }
      var include;
      if (isExpired) {
        include = {
          expiredAt: { [Op.lt]: new Date() }
        };
      }
      console.log("+", where);
      return this.findAll({
        where: {
          ...where
        },
        include: [
          {
            model: PG.ProductStock,
            where: { ...include }
          }
        ],

        offset: perPage * (page - 1),
        limit: perPage,
        order: [["createdAt", "DESC"]]
      });
    } catch (error) {
      throw error;
    }
  }

  //dirty hack
  static listAvailable({
    page = 1,
    perPage = 30,
    productId,
    isAvailable,
    isExpired
  }) {
    try {
      const where = omitBy(productId, isNil);

      console.log(".", where);
      return this.findAll({
        where: {
          //+ modifiy query to filter isAvailable=true KK
          //isAvailable: isAvailable
          ...where
        },
        include: PG.ProductStock,
        offset: perPage * (page - 1),
        limit: perPage,
        order: [["createdAt", "DESC"]]
      });
    } catch (error) {
      throw error;
    }
  }

  static listSummary({ page = 1, perPage = 30, productId }) {
    try {
      const where = omitBy(productId, isNil);
      console.log("getting summary");
      return sequelize.query(
        'SELECT products.name, products.id, COALESCE(SUM ("productStocks"."amount"),0) AS availableAmount, COALESCE(SUM (CASE WHEN "productStocks"."expiredAt" < CURRENT_DATE THEN "productStocks"."amount" END),0) AS expiredAmount FROM products INNER JOIN "productStocks" ON products.id = "productStocks"."productId" GROUP BY "products"."name", "products"."id", "productStocks"."productId" '
      );
      // .then(results => {
      //   console.log("results:", results);
      // });

      // this.findAll({
      //   where: {
      //     //+ modifiy query to filter isAvailable=true KK
      //     //attributes: ["id", "name", "availableAmount", "expiredAmount"]
      //     ...where
      //   },
      //   include: PG.ProductStock,
      //   offset: perPage * (page - 1),
      //   limit: perPage
      //   //        order: [["createdAt", "DESC"]]
      // });
    } catch (error) {
      throw error;
    }
  }

  static seed() {
    try {
      this.bulkCreate(seed);
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }

  transform() {
    try {
      return omit(this.toJSON(), ["createdAt", "updatedAt"]);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Product;
