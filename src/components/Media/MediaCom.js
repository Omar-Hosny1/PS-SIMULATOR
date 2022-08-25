import React from "react";
import Image from "./media.jpg";
import MediaData from "./MediaData";
import MediaPoster from "./MediaPoster";
function MediaCom() {
  const style = {
    backgroundImage: `url("${Image}")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  const MediaLogos = MediaData.map((ele) => (
    <MediaPoster image={ele.image} key={Math.random()} />
  ));
  return (
    <>
      <div className="media" style={style}></div>
      <div className="media-container">{MediaLogos}</div>
      <div className="media-movie">
        <h1>The Teriminal</h1>
        <p>
          The original Disney logo showed the profile of Mickey Mouse. When
          animated, as the logo always was in the company's films and TV shows
        </p>
      </div>

      <div className=""></div>
    </>
  );
}

export default MediaCom;
