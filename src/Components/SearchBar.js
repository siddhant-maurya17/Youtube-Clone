import React,{useState}from "react";
import axios from "axios";

const SearchBar=({setVideos})=>{
    
    let[search,setSearch]=useState("");
    
    function implementSearch(){
        axios.get("https://www.googleapis.com/youtube/v3/search",{
     params:{
            key:"AIzaSyCBWgzXXliZgxyacOOOMjo6aXKWEvdfsfE",
            part:"snippet",
            maxResults:5,
            type:"video",
            q:search

           }
        })
        .then(response=>setVideos(response.data.items))
        .catch(err=>console.log(err)) 
    }

    return (
    <div className="search-bar">
        <input type="text" placeholder="Search Here..." onChange={(e)=>setSearch(e.target.value)}/>
        <button onClick={implementSearch}>Search</button>
    </div>
    )
}

export default SearchBar;