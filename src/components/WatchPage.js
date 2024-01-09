import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constant";
import likeIcon from "../assets/like.svg";
import disLikeIcon from "../assets/dislike.svg";
import shareIcon from "../assets/share.svg";
import moreIcon from "../assets/more.svg";
import RelatedVideos from "./RelatedVideos";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();
  // const [relatedVideos, setRelatedVideos] = useState([]);
  const [videoInfo, setVideoInfo] = useState({
    title: "",
    description: "",
    channelTitle: "",
    thumbnail: "",
    viewCount: "",
    likeCount: "",
    logoUrl: "",
  });

  useEffect(() => {
    dispatch(closeMenu());
    fetchData();
    relatedVideosData();
  }, [dispatch, videoId]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${GOOGLE_API_KEY}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch video data");
      }

      const data = await response.json();

      if (data.items.length > 0) {
        const snippet = data.items[0].snippet;
        const statistics = data.items[0]?.statistics;
        setVideoInfo({
          thumbnail: snippet.thumbnails.medium.url,
          title: snippet?.title,
          description: snippet?.description,
          channelTitle: snippet?.channelTitle,
          // tags: data.items[0]?.snippet?.tags,
          viewCount: statistics?.viewCount,
          likeCount: statistics?.likeCount,
          logoUrl: snippet?.thumbnails?.default?.url,
        });
        console.log(data);
      }
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };

  const relatedVideosData = async () => {
    try {
      const relatedResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&key=${GOOGLE_API_KEY}`
      );

      if (!relatedResponse.ok) {
        throw new Error("Failed to fetch related videos");
      }

      const relatedData = await relatedResponse.json();

      if (relatedData.items.length > 0) {
        const relatedVideos = relatedData.items.map((item) => item.id.videoId);
        // You can use relatedVideos array for further processing
        console.log("Related Videos:", relatedVideos);
      }
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };

  // console.log(logoUrl);
  function formatViewCount(count) {
    if (count >= 1000000) {
      // Display as million (M) if the count is over 1 million
      return (count / 1000000).toFixed(1) + "M";
    } else if (count >= 1000) {
      // Display as thousand (K) if the count is over 1 thousand
      return (count / 1000).toFixed(1) + "K";
    } else {
      // Display the count as is for numbers below 1000
      return count;
    }
  }

  return (
    <div className="w-full xl:fixed flex flex-col pt-24 px-4 xl:flex-row min-h-screen overflow-hidden">
      <div className="w-full xl:w-[60%] ">
        {videoInfo?.thumbnail && (
          <div className="w-full">
            <div className="w-full 2xl:w-[860px] mx-auto py-4">
              <iframe
                // width="860px"
                // height="515"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                className="rounded-xl h-[300px] md:h-[400px]  w-full 2xl:w-[90%] mx-auto"
              ></iframe>
              <p className="text-lg md:text-2xl font-semibold my-2">
                {videoInfo.title}
              </p>
              {/* <p>{videoInfo.description}</p>
          
          <p>{videoInfo?.tags}</p>
          <p>{videoInfo?.viewCount}</p>
          <p>{videoInfo?.likeCount}</p> */}
              <div className="w-full my-4">
                <div className="flex flex-col md:flex-row md:flex-between items-center w-full gap-2">
                  <div className="flex items-center justify-start gap-3 w-full lg:w-1/2">
                    <div className="flex items-center gap-2">
                      <img
                        src={videoInfo.logoUrl}
                        alt="url"
                        className="rounded-full w-10 h-10"
                      />

                      <div className="flex flex-col">
                        <h1 className="text-lg font-semibold">
                          {videoInfo.channelTitle}
                        </h1>
                        <p className="text-sm sm:text-md text-gray-700">
                          25.5K subscriber
                        </p>
                      </div>
                    </div>
                    <button className="bg-black rounded-full h-11  w-24 text-md text-white text-bold">
                      Subscribe
                    </button>
                  </div>
                  <div className="flex justify-start gap-3 md:justify-end md:items-end w-full lg:w-1/2">
                    <div className="flex">
                      <button className="flex bg-gray-200 py-2 px-5 rounded-l-full gap-2 items-center justify-center">
                        <img src={likeIcon} alt="like" className="w-6 h-6" />
                        <p className="font-semibold text-md">
                          {formatViewCount(videoInfo?.likeCount)}
                        </p>
                      </button>
                      <div className="w-[1px] flex items-center bg-gray-200">
                        <div className="w-full h-[80%] bg-gray-400"></div>
                      </div>
                      <button className="bg-gray-200 py-2 px-5 rounded-r-full">
                        <img
                          src={disLikeIcon}
                          alt="dislike"
                          className="w-6 h-6"
                        />
                      </button>
                    </div>
                    <div className="flex bg-gray-200 py-2 px-5 rounded-full gap-2 items-center justify-center">
                      <img src={shareIcon} alt="share" className="w-6 h-6" />
                      <p className="font-semibold text-md">Share</p>
                    </div>
                    <div>
                      <button className="flex bg-gray-200 py-3 px-5 rounded-full gap-2 items-center justify-center">
                        <img src={moreIcon} alt="moreIcon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-full xl:w-[30%] mx-4">
        <RelatedVideos />
      </div>
    </div>
  );
};

export default WatchPage;
