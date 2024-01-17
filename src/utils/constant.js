import homeIcon from "../assets/home.svg";
import shortsIcon from "../assets/shorts.svg";
import subscriptionsIcon from "../assets/subscriptions.svg";
import redLiveIcon from "../assets/red-live.svg";

import libraryIcon from "../assets/library.svg";
import historyIcon from "../assets/history.svg";
import yourVideosIcon from "../assets/yourVideos.svg";
import watchLaterIcon from "../assets/watchLater.svg";
import likedVideosIcon from "../assets/likedVideos.svg";
import showMoreIcon from "../assets/showMore.svg";

import trendingIcon from "../assets/trending.svg";
import shoppingIcon from "../assets/shopping.svg";
import musicIcon from "../assets/music.svg";
import moviesIcon from "../assets/movies.svg";
import liveIcon from "../assets/live.svg";
import gamingIcon from "../assets/gaming.svg";
import newsIcon from "../assets/news.svg";
import sportsIcon from "../assets/sports.svg";
import learningIcon from "../assets/learning.svg";
import fashionAndBeautyIcon from "../assets/fashionAndBeauty.svg";

import ytPremiumIcon from "../assets/yt-premium.svg";
import ytStudioIcon from "../assets/yt-studio.svg";
import ytMusicIcon from "../assets/yt-music.svg";
import ytKidsIcon from "../assets/yt-kids.svg";

import settingsIcon from "../assets/settings.svg";
import reportHistoryIcon from "../assets/reportHistory.svg";
import helpIcon from "../assets/help.svg";
import sendFeedbackIcon from "../assets/sendFeedback.svg";

export const categories = [
  { name: "Home", img: homeIcon },
  { name: "Shorts", img: shortsIcon },
  { name: "Subscriptions", img: subscriptionsIcon },
  { name: "Red Live", img: redLiveIcon, line: <hr /> },

  { name: "Library", img: libraryIcon, main: "You" },
  { name: "History", img: historyIcon },
  { name: "Your Videos", img: yourVideosIcon },
  { name: "Watch Later", img: watchLaterIcon },
  { name: "Liked Videos", img: likedVideosIcon },
  { name: "Show More", img: showMoreIcon, line: <hr /> },

  { name: "Trending", img: trendingIcon, main: "Explore" },
  { name: "Shopping", img: shoppingIcon },
  { name: "Music", img: musicIcon },
  { name: "Movies", img: moviesIcon },
  { name: "Live", img: liveIcon },
  { name: "Gaming", img: gamingIcon },
  { name: "News", img: newsIcon },
  { name: "Sports", img: sportsIcon },
  { name: "Learning", img: learningIcon },
  { name: "Fashion & Beauty", img: fashionAndBeautyIcon, line: <hr /> },

  { name: "Youtube Premium", img: ytPremiumIcon, main: "More from YouTube" },
  { name: "Youtube Studio", img: ytStudioIcon },
  { name: "Youtube Music", img: ytMusicIcon },
  { name: "Youtube Kids", img: ytKidsIcon, line: <hr /> },

  { name: "Settings", img: settingsIcon },
  { name: "Report History", img: reportHistoryIcon },
  { name: "Help", img: helpIcon },
  { name: "Send Feedback", img: sendFeedbackIcon, line: <hr /> },
];

export const GOOGLE_API_KEY = "AIzaSyDbYgqSgOhQKn7si_x1LhPlkXWWeTjLr4E";
export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=60&regionCode=IN&key=" +
  GOOGLE_API_KEY;
export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${GOOGLE_API_KEY}`;
export const YOUTUBE_VIDEO_WATCH_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=`;
export const SUGGESTION_API = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;

// AIzaSyDbYgqSgOhQKn7si_x1LhPlkXWWeTjLr4E;
