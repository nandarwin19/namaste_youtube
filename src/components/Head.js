import React, { useEffect, useState } from "react";
import youtube from "../assets/youtube.png";
import menu from "../assets/menu.png";
import user from "../assets/user.png";
import search from "../assets/search.png";
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
    <div className="fixed w-full grid grid-flow-col p-5 shadow-2xl z-50 bg-white items-center">
      <div className="ml-5 flex col-span-1 items-center justify-start gap-3">
        <img
          onClick={() => toggleMenuHandler()}
          alt="menu"
          src={menu}
          className="h-5 object-cover cursor-pointer"
        />
        <a href="/">
          <img alt="youtube" src={youtube} className="h-12 mx-2 object-cover" />
        </a>
      </div>

      <div className="flex flex-row relative">
        <input
          className="border rounded-l-full w-[572px] h-10 pl-5 outline-none"
          type="text"
          placeholder="Search"
        />
        <button className="border rounded-r-full w-16 h-10 bg-gray-100">
          <img
            alt="search-icon"
            className="h-5 mx-auto"
            src="https://cdn-icons-png.flaticon.com/512/482/482631.png"
          />
        </button>
        <div className="w-10 h-10 hover:rounded-full hover:bg-gray-100 ml-5 cursor-pointer"></div>
      </div>

      <div className="col-span-1">
        <img alt="user" src={user} className="w-8 h-8 object-cover" />
      </div>
    </div>
  );
};

export default Head;
