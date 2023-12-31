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
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };
  return (
    <div className="fixed w-full min-h-screen bg-pink-200 z-0">
      <div className="fixed h-full overflow-auto bg-white w-full">
        <div className="w-full flex flex-wrap gap-1">
          {videos.map((video) => (
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
