import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const data = useLoaderData();
  // console.log(data.product_title)
  const { id } = useParams();
  const [product, setProduct] = useState({ });
 
  useEffect(() => {
    const p = data.find((item) => item.product_id=== id);
    setProduct(p);
  }, [data, id]);

  console.log(data);
  console.log(product);
  console.log(id);
  

  const {product_image, product_title, price, category, rating, specification,other} = product;

  
  return (
    <div>
        
      <div className="h-full">
        <div className="card bg-base-100  shadow-xl  flex  border-2 border-purple-600 p-4 h-full">
          <figure className="w-[60%] mb-6 container mx-auto ">
            <img
              className="object-cover h-full w-full "
              src={product_image}
              alt={product_title}
            />
          </figure>
          <div className="card-body border-2 border-gray-700 space-y-6">
            <div className="flex flex-col h-full">
              <h2 className="card-title">{product_title}!</h2>
              <p>Price: $ {price}</p>
              <p>{category}</p>
              <p>{rating}</p>
              <p>{specification}</p>
            </div>

            <div className="card-actions justify-start ">
            <Link to={`/ProductDetails/${product.product_id}`}><button className="btn btn-primary rounded-full">View Details</button></Link>
          </div>
          </div>
        </div>
      </div>
      );
    </div>
  );
};

export default ProductDetails;
