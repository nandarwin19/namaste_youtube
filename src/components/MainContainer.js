import React from "react";
import ButtonLists from "./ButtonLists";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="w-full pt-24">
      <ButtonLists />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
