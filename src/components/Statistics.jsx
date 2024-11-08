// Statistics.jsx
import React from 'react';
import {
  ComposedChart,
  Bar,
  Area,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Helmet } from 'react-helmet';

const data = [
  {
    product_id: "101",
    product_title: "Dell XPS 13",
    price: 999,
    rating: 4.8,
  },
  {
    product_id: "102",
    product_title: "MacBook Air M1",
    price: 1200,
    rating: 4.9,
  },
  {
    product_id: "201",
    product_title: "iPhone 13",
    price: 799,
    rating: 4.7,
  },
  {
    product_id: "202",
    product_title: "Samsung Galaxy S21",
    price: 850,
    rating: 4.6,
  },
  {
    product_id: "301",
    product_title: "Apple Watch Series 7",
    price: 399,
    rating: 4.8,
  },
  {
    product_id: "302",
    product_title: "Samsung Galaxy Watch 4",
    price: 529,
    rating: 4.5,
  },
  {
    product_id: "401",
    product_title: "Anker PowerCore 10000",
    price: 502,
    rating: 4.4,
  },
  {
    product_id: "402",
    product_title: "RAVPower 20000mAh",
    price: 602,
    rating: 4.6,
  },
  {
    product_id: "501",
    product_title: "Apple 20W USB-C Charger",
    price: 400,
    rating: 4.8,
  },
  {
    product_id: "502",
    product_title: "Samsung 25W Super Fast Charger",
    price: 357,
    rating: 4.7,
  },
  {
    product_id: "601",
    product_title: "Sony WH-1000XM4",
    price: 449,
    rating: 4.9,
  },
  {
    product_id: "602",
    product_title: "Logitech MX Master 3",
    price: 998,
    rating: 4.8,
  },
];

const Statistics = () => {
  return (
    <div className='bg-white py-20'>
      <Helmet>
        <title>Statistics  || Ts Gadgets Express</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-center my-6">Product Price and Rating Statistics</h1>
      <ResponsiveContainer width="95%" height={400}>
        <ComposedChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="product_title" label={{ value: 'Product Name', position: 'insideBottomRight', offset: 0 }} />
          <YAxis label={{ value: 'Price', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="price" barSize={20} fill="purple" />
          <Scatter dataKey="rating" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
