import React, { useEffect, useState } from "react";
import ChatMsg from "./ChatMsg";
import user from "../assets/user.png";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMsg, generateRandomName } from "../utils/helper";
import { BsEmojiLaughing } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";

const LiveChat = ({ chatToggle, setChatToggle }) => {
  const dispatch = useDispatch();
  const [liveMsg, setLiveMsg] = useState("");

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMsg(),
          img: user,
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);

  const addLiveMsg = (e) => {
    e.preventDefault();
  };

  const sendMsg = () => {
    dispatch(
      addMessage({
        name: "Nandar Win",
        message: liveMsg,
        img: "https://staticg.sportskeeda.com/editor/2023/11/e8c5d-16991408823202-1920.jpg?w=840",
      })
    );
    setLiveMsg("");
  };

  const switchSidebar = () => {
    setChatToggle(!chatToggle);
  };

  //   const showEmoji = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://emoji-api.com/emojis?access_key=123412341234"
  //       );
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch emoji api");
  //       }

  //       const data = await response.json();
  //       console.log(data)
  //       return data;
  //     } catch (error) {
  //       console.error("Error fetching video data:", error);
  //     }
  //   };

  //   useEffect(() => {
  //     showEmoji();
  //   }, []);

  return (
    <div>
      <div className="overflow-y-scroll flex flex-col-reverse  h-[430px]">
        {/* //Don't use indexes as keys */}
        {chatMessages.map((c, index) => (
          <ChatMsg key={index} msg={c.message} img={c.img} name={c.name} />
        ))}
      </div>
      <form onSubmit={addLiveMsg}>
        <input
          type="text"
          value={liveMsg}
          onChange={(e) => {
            setLiveMsg(e.target.value);
          }}
          className="w-full rounded-xl p-3 outline-none bg-gray-300 text-sm"
          placeholder="Say something..."
        />
        <div className="my-4 flex items-center justify-between">
          {/* <button type="submit"> */}
          <BsEmojiLaughing className="text-xl cursor-pointer" />
          {/* </button> */}
          <button type="submit" onClick={sendMsg}>
            <AiOutlineSend className="text-xl cursor-pointer" />
          </button>
        </div>
        <hr />
        <div onClick={switchSidebar}>
          <p className="text-center my-1 text-sm cursor-pointer">Hide chat</p>
        </div>
      </form>
    </div>
  );
};

export default LiveChat;
