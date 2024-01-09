import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  // const { snippet, statistics } = info;
  // const { channelTitle, title, thumbnails } = snippet;

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
    <div className="p-4 m-2 w-80 shadow-xl cursor-pointer">
      <img
        className="rounded-lg"
        src={info?.snippet?.thumbnails?.medium?.url}
        alt={info?.snippet?.title}
      />
      <ul>
        <li
          className="font-medium py-1"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            WebkitLineClamp: 1,
            flexWrap: "wrap",
          }}
        >
          {info?.snippet?.title}
        </li>
        <li className="text-sm">{info?.snippet?.channelTitle}</li>
        <li className="flex">
          {formatViewCount(info?.statistics.viewCount)} views • <p>Just now</p>
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
