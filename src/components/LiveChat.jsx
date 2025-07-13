import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomString } from "../utils/helper";
import { useState } from "react";
const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMsg = useSelector((store) => store.chat);
  const [liveMsg, setLiveMsg] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      //API Polling
      console.log("API Polling--");

      dispatch(
        addMessage({
          name: generateRandomName(),
          msg: generateRandomString(20) + "$$",
        })
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formHandler = (e) => {
    e.preventDefault();

    dispatch(
      addMessage({
        name: "Ritu Raj",
        msg: liveMsg,
      })
    );

    setLiveMsg("");
  };

  return (
    <>
      {" "}
      <div className="w-full rounded-lg h-[600px] ml-2 p-2 border border-black bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        {chatMsg.message.map((chat) => (
          <ChatMessage name={chat.name} msg={chat.msg} />
        ))}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={formHandler}
      >
        <input
          className="w-96 px-2"
          type="text"
          value={liveMsg}
          onChange={(e) => setLiveMsg(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
