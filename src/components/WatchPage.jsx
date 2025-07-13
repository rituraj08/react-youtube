import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const id = searchParam.get("v");

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col w-full">
      <div className="flex px-5">
        <div>
          <iframe
            width="1100"
            height="600"
            src={"https://www.youtube.com/embed/" + id}
            title="You Tube Video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
            <LiveChat/>
        </div>
      </div>

      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
