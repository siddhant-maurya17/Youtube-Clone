import React,{useState} from "react";
import SearchBar from "./Components/SearchBar";
import VideoPlay from "./Components/VideoPlay";
import VideoList from "./Components/VideoList";

import "./App.css";
const App=()=>{
  let [videos,setVideos]=useState("");
  let [selectedVideos,setSelectedVideos]=useState("");
  //console.log(videos)
  // console.log(selectedVideos);
  return (
    <div>
         <SearchBar setVideos={setVideos}/>
         <div className="videos">
          <VideoPlay selectedVideos={selectedVideos}/>
          <VideoList videos={videos} setSelectedVideos={setSelectedVideos}/>
         </div>
    </div>
  )
}

export default App;