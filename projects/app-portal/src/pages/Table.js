import React from "react";
import { Table as TB } from "react-bootstrap";
export default function Table(props) {
  console.log(props);
  const Arr = [];

  props.sugar.forEach(product => {
    let newObj = {};
    //console.log("p", product);
    newObj = Object.assign(newObj, product);
    // should be a better cleaner way involving filter
    // or dont really need to delete it since its not being used anyways
    delete newObj.productStocks;
    product.productStocks.forEach(stock => {
      //  console.log("s", stock);
      newObj = Object.assign(newObj, stock);
      Arr.push(newObj);
    });
  });
  //console.log("Arr", Arr);

  const list = Arr.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.sweetiness}</td>
        <td>{item.color}</td>
        <td>{item.isAvailable}</td>
        <td>{item.originalAmount}</td>
        <td>{item.amount}</td>
        <td>{item.importedAt}</td>
        <td>{item.expiredAt}</td>
        <td>{item.createdAt}</td>
        <td>{item.updatedAt}</td>
        <td>{item.productid}</td>
      </tr>
    );
  });

  return (
    <div>
      <TB responsive>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>sweetness</th>
            <th>color</th>
            <th>isAvailable</th>
            <th>originalAmount</th>
            <th>amount</th>
            <th>importedAt</th>
            <th>expiredAt</th>
            <th>updatedAt</th>
            <th>productID</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </TB>
    </div>
  );
}
