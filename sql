SELECT


products.name,
products.id,
/*"productStocks"."productId",*/
/*productStocks.availableAmount,
productStocks.expiredAmount

"productStocks"."id",*/
SUM ("productStocks"."amount") AS availableAmount,
SUM (CASE WHEN "productStocks"."expiredAt" < CURRENT_DATE THEN "productStocks"."amount" END) AS expiredAmount


FROM 
products
INNER JOIN "productStocks" ON products.id = "productStocks"."productId"
GROUP BY "products"."name", "products"."id", "productStocks"."productId"
