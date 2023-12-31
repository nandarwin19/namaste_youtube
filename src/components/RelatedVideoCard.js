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

  function formatElapsedTime(uploadTime) {
    const now = new Date();
    const uploadDate = new Date(uploadTime);

    const timeDifference = now - uploadDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return days === 1 ? "1 day ago" : `${days} days ago`;
    } else if (hours > 0) {
      return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
    } else if (minutes > 0) {
      return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
    } else {
      return "Just now";
    }
  }

  // Example usage with a given upload time
  const uploadTime = info?.snippet?.localized?.publishedAt;
  const elapsed = formatElapsedTime(uploadTime);

  return (
    <div className="w-full ">
      <div className="flex gap-2 items-start justify-start flex-row p-2 mx- shadow-md cursor-pointer">
        <img
          className="rounded-lg w-52"
          src={info?.snippet?.thumbnails?.medium?.url}
          alt={info?.snippet?.title}
        />
        <ul>
          <li
            className="font-medium py-1 whitespace-normal overflow-hidden"
            style={{ flexWrap: "wrap" }}
          >
            {info?.snippet?.title}
          </li>

          <li className="text-sm">{info?.snippet?.channelTitle}</li>
          <li>
            {formatViewCount(info?.statistics.viewCount)} views •{" "}
            {/* {info?.snippet?.localized?.publishedAt} */}
            {elapsed}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RealtedVideoCard;