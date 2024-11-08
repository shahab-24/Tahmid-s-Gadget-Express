import { Link } from "react-router-dom";

const CategoryCard = ({ cards }) => {
  const { product_image, product_title, price, product_id } = cards;

  return (
    <div className="h-full">
      <div className="card bg-base-100  shadow-xl  flex  border-2 border-purple-600 p-4 h-full">
        <figure className=" h-60 mb-6">
          <img className="object-cover h-full w-full" src={product_image} alt="Shoes" />
        </figure>
        <div className="card-body border-2 border-gray-700 space-y-6 h-[36]">
          
            <div className="flex flex-col h-full">
            <h2 className="card-title">{product_title}!</h2>
            <p>Price: $ {price}</p>
            </div>
          

          <div className="card-actions justify-center">
            <Link to={`/ProductDetails/${product_id}`}><button className="btn btn-outline  text-base lg:text-lg md:text-lg rounded-full text-purple-600">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
