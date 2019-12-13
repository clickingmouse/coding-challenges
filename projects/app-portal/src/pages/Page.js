import React, { useState, useEffect } from "react";
import { Button, Jumbotron, Container } from "react-bootstrap";
import axios from "axios";
import Table from "./Table";
import Filter from "./Filter";

function Page() {
  const [sugar, setSugar] = useState([]);

  const getSugar = options => {
    console.log(".");
    let opts = options ? options : "";
    axios
      .get("http://localhost:3000/v1/product" + opts)
      .then(data => {
        setSugar(data.data);
      })
      .catch(err => {
        console.log(err);
        return null;
      });
  };

  const showTable = sugar ? <Table sugar={sugar} /> : null;
  console.log("got s=>", sugar);
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Sugar Stock Pro</h1>
          <p>Get sugar availability</p>
        </Container>
      </Jumbotron>
      <Filter getSugarHandler={getSugar} />
      {showTable}
    </div>
  );
}

export default Page;

const dummyData = [
  {
    id: 1,
    name: "Mercury Sugar",
    sweetiness: "1",
    color: "silver",
    isAvailable: true,
    productStocks: [
      {
        id: 1,
        originalAmount: "22.22",
        amount: "11.11",
        importedAt: "2018-12-31T16:00:00.000Z",
        expiredAt: "2019-01-08T15:59:59.000Z",
        createdAt: "2019-12-11T08:31:16.369Z",
        updatedAt: "2019-12-11T08:31:16.369Z",
        productId: 1
      },
      {
        id: 2,
        originalAmount: "44.44",
        amount: "33.33",
        importedAt: "2019-01-02T16:00:00.000Z",
        expiredAt: "2019-01-05T15:59:59.000Z",
        createdAt: "2019-12-11T08:31:16.369Z",
        updatedAt: "2019-12-11T08:31:16.369Z",
        productId: 1
      },
      {
        id: 3,
        originalAmount: "66.66",
        amount: "55.55",
        importedAt: "2019-01-08T16:00:00.000Z",
        expiredAt: "2019-01-31T15:59:59.000Z",
        createdAt: "2019-12-11T08:31:16.369Z",
        updatedAt: "2019-12-11T08:31:16.369Z",
        productId: 1
      }
    ]
  },
  {
    id: 2,
    name: "Venus Sugar",
    sweetiness: "7",
    color: "purple",
    isAvailable: true,
    productStocks: [
      {
        id: 4,
        originalAmount: "77.77",
        amount: "66.66",
        importedAt: "2018-12-31T16:00:00.000Z",
        expiredAt: "2019-01-31T15:59:59.000Z",
        createdAt: "2019-12-11T08:31:16.369Z",
        updatedAt: "2019-12-11T08:31:16.369Z",
        productId: 2
      }
    ]
  },
  {
    id: 3,
    name: "Earth Sugar",
    sweetiness: "1",
    color: "blue",
    isAvailable: true,
    productStocks: [
      {
        id: 5,
        originalAmount: "77.77",
        amount: "66.66",
        importedAt: "2018-12-31T16:00:00.000Z",
        expiredAt: "2019-01-31T15:59:59.000Z",
        createdAt: "2019-12-11T08:31:16.369Z",
        updatedAt: "2019-12-11T08:31:16.369Z",
        productId: 3
      }
    ]
  },
  {
    id: 4,
    name: "Mars Sugar",
    sweetiness: "2",
    color: "orange",
    isAvailable: true,
    productStocks: [
      {
        id: 6,
        originalAmount: "77.77",
        amount: "66.66",
        importedAt: "2018-12-31T16:00:00.000Z",
        expiredAt: "2019-01-31T15:59:59.000Z",
        createdAt: "2019-12-11T08:31:16.369Z",
        updatedAt: "2019-12-11T08:31:16.369Z",
        productId: 4
      }
    ]
  },
  {
    id: 5,
    name: "Jupiter Sugar",
    sweetiness: "2",
    color: "green",
    isAvailable: true,
    productStocks: [
      {
        id: 7,
        originalAmount: "77.77",
        amount: "66.66",
        importedAt: "2018-12-31T16:00:00.000Z",
        expiredAt: "2019-01-31T15:59:59.000Z",
        createdAt: "2019-12-11T08:31:16.369Z",
        updatedAt: "2019-12-11T08:31:16.369Z",
        productId: 5
      }
    ]
  },
  {
    id: 6,
    name: "Saturn Sugar",
    sweetiness: "4",
    color: "orange",
    isAvailable: true,
    productStocks: [
      {
        id: 8,
        originalAmount: "77.77",
        amount: "66.66",
        importedAt: "2018-12-31T16:00:00.000Z",
        expiredAt: "2019-01-31T15:59:59.000Z",
        createdAt: "2019-12-11T08:31:16.369Z",
        updatedAt: "2019-12-11T08:31:16.369Z",
        productId: 6
      }
    ]
  },
  {
    id: 7,
    name: "Uranus Sugar",
    sweetiness: "9",
    color: "blue",
    isAvailable: true,
    productStocks: [
      {
        id: 9,
        originalAmount: "77.77",
        amount: "66.66",
        importedAt: "2018-12-31T16:00:00.000Z",
        expiredAt: "2019-01-31T15:59:59.000Z",
        createdAt: "2019-12-11T08:31:16.369Z",
        updatedAt: "2019-12-11T08:31:16.369Z",
        productId: 7
      }
    ]
  }
];
