import React from "react";

const RealtedVideoCard = ({ info }) => {
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
    <div className="w-full flex flex-col">
      <div className="flex gap-2 items-start justify-start p-2 mx- shadow-md cursor-pointer">
        <img
          className="rounded-lg w-52"
          src={info?.snippet?.thumbnails?.medium?.url}
          alt={info?.snippet?.title}
        />
        <ul>
          <li
            className="font-medium py-1 whitespace-normal overflow-hidden"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              WebkitLineClamp: 2,
              flexWrap: "wrap",
            }}
          >
            {info?.snippet?.title}
          </li>

          <li className="text-sm">{info?.snippet?.channelTitle}</li>
          <li className="flex flex-row">
            <p className="text-[13px]">
              {formatViewCount(info?.statistics.viewCount)} views •{" "}
            </p>
            <p className="text-[13px]">1 day ago</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RealtedVideoCard;
