import "./App.css";
import YTSearch from "youtube-api-search";
import debounce from "debounce";
import SearchBar from "./components/SearchBar";
import { useEffect, useState } from "react";
import VideoList from "./components/VideoList";
import Video from "./components/Video";

function App() {
    const API_KEY = "AIzaSyBAtIJv6UiFoYfBjiYdpbLP6M0r_6D8kFc";
    const [term, setTerm] = useState();
    const [videos, setVideos] = useState([]);
    const [selected, setSelected] = useState({
        id: {
            videoId: ''
        },
        snippet: {
            title: ''
        }
    })
    

    useEffect(() => {
        const search = (term) => {
            YTSearch({ key: API_KEY, term }, (video) => {
                setVideos(video);
            });
        };
        const videoSearch = debounce((term) => search(term), 0);
        videoSearch(term);
    }, [term]);

    return (
        <div className="flex flex-col px-10 relative h-screen bg-black">
            <SearchBar setTerm={setTerm} />
            <Video id={selected.id.videoId} title={selected.snippet.title} />
            <VideoList videos={videos} setSelected={setSelected}  />
        </div>
    );
}

export default App;
