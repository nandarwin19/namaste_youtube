import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import { Link } from "react-router-dom";
import RelatedVideoCard from "./RelatedVideoCard";

const RelatedVideos = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      setVideos(json.items);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  return (
    <div className="fixed mx-auto flex w-full min-h-screen z-0 bg-pink-200">
      <div className="fixed w-[90%] mx-auto h-full overflow-auto bg-white md:w-full">
        <div className="w-[500px] flex flex-col flex-wrap gap-1">
          {videos?.map((video) => (
            <Link to={"/watch?v=" + video.id}>
              <RelatedVideoCard key={video.id} info={video} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedVideos;
