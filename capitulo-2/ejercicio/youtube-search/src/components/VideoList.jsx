import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, setSelected }) => {
    console.log(videos);
    return (
        <div className="h-full w-4/12 border-white border self-end absolute flex flex-col gap-2 overflow-y-scroll custom-scroll">
            {videos ? (
                videos.map((video, index) => (
                    <button
                        key={index}
                        onClick={() => setSelected(video)}
                    >
                        <VideoItem
                            thumbnail={video.snippet.thumbnails.medium.url}
                            title={video.snippet.title}
                            channel={video.snippet.channelTitle}
                        />
                    </button>
                ))
            ) : (
                <div>Loading</div>
            )}
        </div>
    );
};

export default VideoList;
