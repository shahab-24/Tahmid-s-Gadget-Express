import { useEffect, useState } from "react";

const CategoryCard = ({ cards }) => {
  const { product_image, product_title, price } = cards;

  return (
    <div className="h-full">
      <div className="card bg-base-100  shadow-xl  flex  border-2 border-purple-600 p-4 h-full">
        <figure className=" h-48 mb-6">
          <img className="object-cover h-full w-full" src={product_image} alt="Shoes" />
        </figure>
        <div className="card-body border-2 border-gray-700 space-y-6">
          
            <div className="flex flex-col h-full">
            <h2 className="card-title">{product_title}!</h2>
            <p>Price: $ {price}</p>
            </div>
          

          <div className="card-actions justify-end ">
            <button className="btn btn-primary w-full">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
