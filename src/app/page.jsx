// pages/index.js
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardBody,
  Typography
} from "@material-tailwind/react";

const getData = async () => {
  const request = await fetch("https://dummyjson.com/products");
  const data = await request.json();
  return data;
};

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { products } = await getData();
      setProducts(products);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="flex gap-5 mt-10 flex-wrap">
        {products.map((product) => (
          <Link key={product.id} href={`/singleProduct/${product.id}`}>
            <div key={product.id} className="w-[350px]">
              <Card className="bg-base-100">
                <CardHeader shadow={false} floated={false} className="h-96">
                  <img
                    src={product.images[0]}
                    alt="card-image"
                    className="h-full w-full object-cover bg-blue-gray-700"
                  />
                </CardHeader>
                <CardBody>
                  <div className="mb-2 flex items-center justify-between">
                    <Typography
                      color="blue-gray"
                      className="font-medium text-white"
                    >
                      {product.title}
                    </Typography>
                    <Typography
                      color="blue-gray"
                      className="font-medium text-white"
                    >
                      ${product.price.toFixed(2)}
                    </Typography>
                  </div>

                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75 text-white"
                  >
                    {product.description}
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default App;
