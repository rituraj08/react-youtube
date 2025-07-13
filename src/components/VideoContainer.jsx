import { useEffect } from "react";
import { YOUTUBE_URL } from "../utils/constants";
import { useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_URL);
    const videoData = await data.json();
    setVideos(videoData.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v="+video.id}>  <VideoCard  info={video} /></Link>

       
      ))}
    </div>
  );
};

export default VideoContainer;
