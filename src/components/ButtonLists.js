import React from "react";
import Button from "./Button";

const btnList = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Cricket",
  "News",
  "Bollywood",
  "Computer",
  "Scene",
  "Mixes",
  // "History",
  // "programming",
  // "Hollywood",
];

const ButtonLists = () => {
  return (
    <div className="flex">
      {btnList?.map((btnName, index) => {
        return <Button key={index} name={btnName} />;
      })}
    </div>
  );
};

export default ButtonLists;
