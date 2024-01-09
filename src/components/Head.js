import React, { useEffect, useState } from "react";
import youtube from "../assets/youtube.png";
import menu from "../assets/menu.png";
import user from "../assets/user.png";
import searchpng from "../assets/search.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { SUGGUESTION_API } from "../utils/constant";

const Head = () => {
  const dispatch = useDispatch(); // useDispatch is a hook from react-redux
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // const timer = setTimeout(() => {
    //   getSuggestion();
    // }, 300);

    // return () => {
    //   clearTimeout(timer);
    // };
    getSuggestion();
  }, [search]);

  const getSuggestion = async () => {
    // await fetch(SUGGUESTION_API + search)
    //   .then((data) => data.json())
    //   .then((response) => {
    //     setSuggestions(response[1]);
    //     console.log(response);
    //   });
    // const data = await fetch(SUGGUESTION_API + search);
    // const json = await data.json();
    // console.log(json);
  };

  return (
    <div className="w-full fixed bg-white z-50">
      <div className="grid grid-flow-col p-5 shadow-lg items-center z-50">
        <div className="flex col-span-1 items-center justify-center">
          <img
            onClick={() => toggleMenuHandler()}
            alt="menu"
            src={menu}
            className="h-5 object-cover cursor-pointer"
          />
          <a href="/">
            <img
              alt="youtube"
              src={youtube}
              className="h-12 mx-2 object-cover"
            />
          </a>
        </div>

        <div className="col-span-10 text-center flex items-center justify-center">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-1/2 border border-gray-400 rounded-l-full px-4 py-1.5"
          />
          {console.log(search)}
          <button className="border border-gray-400 rounded-r-full px-4 py-1.5">
            <img src={searchpng} alt="search" className="h-6" />
          </button>
        </div>

        <div className="col-span-1">
          <img alt="user" src={user} className="w-8 h-8 object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Head;
