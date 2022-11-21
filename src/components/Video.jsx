import React from "react";

export const Video = ({ linkVideo }) => {
  return (
    <div className="py-5">
      <video className="video" controls>
        <source src={linkVideo} type="video/mp4" />
      </video>
    </div>
  );
};
