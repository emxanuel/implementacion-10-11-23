import React from "react";

const VideoItem = ({ thumbnail, title, channel }) => {
    title = title.length >= 50? title.slice(0, 46).concat('...') : title
    return (
        <div className="text-white flex gap-4">
            <div className="relative">
                <img
                    src={thumbnail}
                    alt="video thumbnail"
                    className="w-52 border aspect-video rounded-lg"
                />
            </div>
            <div className="flex flex-col w-60 text-ellipsis">
                <p className="text-lg font-semibold">{title}</p>
                <p className="text-white/80">{channel}</p>
            </div>
        </div>
    );
};

export default VideoItem;
