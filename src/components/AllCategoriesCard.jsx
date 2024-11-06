import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const AllCategoriesCard = ({ categories }) => {
  // console.log(categories);

  const [card, setCard] = useState([]);
  // console.log(card);

  useEffect(() => {
    fetch("/public/gadgets.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);

  return (
    <div className="container mx-auto">
      <div className=" flex justify-center">
        <h3 className="text-white  font-bold text-5xl my-10">
          Exploring Cutting-Edge Gadgets
        </h3>
      </div>
      <div className="grid lg:grid-cols-4 gap-4 shadow-xl">

        <div className="text-white font-bold col-span-1 border-2 border-purple-600 h-auto  self-start  p-6 shadow-xl rounded-xl bg-base-100">
          <h4 className="text-center text-2xl p-4 bg-purple-600 rounded-full">All Categories</h4>
          <divider className="divider text-purple-600"></divider>
          {categories.map((category) => (
            <div key={category.id} className="">
              <ul className="flex space-y-4 gap-4 justify-center">
                <li>
                  <button className="btn btn-outline text-purple-600 mt-4 w-[150px]">
                    {category.name}
                  </button>
                </li>
              </ul>
            </div>
          ))}
        </div>

        <div className="col-span-3 grid lg:grid-cols-3 gap-4">
         
            {card.map((card) => (
              <CategoryCard key={card.id} cards={card}></CategoryCard>
            ))}
         
        </div>
      </div>
    </div>
  );
};

export default AllCategoriesCard;
