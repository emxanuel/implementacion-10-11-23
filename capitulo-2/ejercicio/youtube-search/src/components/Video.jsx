import React from "react";

const Video = ({id, title}) => {
    return (
        <div className="mt-10">
            <iframe width={830} className="aspect-video" src={`https://www.youtube.com/embed/${id}`} title={title} frameborder="0" />
        </div>
    )
};

export default Video;
