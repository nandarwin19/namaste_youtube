import React from "react";
import { categories } from "../utils/constant";
import { useSelector } from "react-redux";

/*
 when we click the humbarger menu, the action is passed, called the reducer function, modify the slice and sidebar 
*/
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen); //need to subscribe the specific store

  //Early Return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="fixed min-h-screen bg-white z-0">
      <div className="fixed h-full overflow-auto bg-white w-48">
        <div className="flex flex-col gap-2 ">
          {categories.map((category, index) => (
            <div className="flex gap-4 flex-col" key={index}>
              <div className="flex font-bold">{category?.main}</div>
              <div className="flex gap-4">
                <img src={category.img} alt={category.name} />
                <div>{category.name}</div>
              </div>
              {category?.line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
