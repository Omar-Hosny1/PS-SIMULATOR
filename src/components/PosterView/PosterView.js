import React from "react";
import { useSelector } from "react-redux";
function PosterView() {
  const data = useSelector((state) => state.GameSlice.gameData);
  return (
    <div className="poster-view">
      <div id="black-overly"></div>
      <div
        className="background-image"
        style={{
          backgroundImage: `url("${data.image}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="poster-info">
        <h1>{data.title}</h1>
        <p>{data.desc}</p>
        <button className="play-btn">Play</button>
      </div>
    </div>
  );
}

export default PosterView;
