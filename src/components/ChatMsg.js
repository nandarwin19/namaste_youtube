import React from "react";

const ChatMsg = ({ name, img, msg }) => {
  return (
    <div className="flex items-start gap-2 p-2 py-4 shadow-sm">
      <img alt="user" src={img} className="w-6 h-6 object-cover rounded-full" />
      <p className="text-sm font-semibold">{name}</p>
      <p className="text-sm">{msg}</p>
    </div>
  );
};

export default ChatMsg;
