import React from "react";
import Img1 from "../assets/clients/coinbase.png";
import Img2 from "../assets/clients/spotify.png";
import Img3 from "../assets/clients/slack.png";
import Img4 from "../assets/clients/dropbox.png";
import Img5 from "../assets/clients/webflow.png";
import Img6 from "../assets/clients/zoom.png";
const Clients = () => {
  const images = [Img1, Img2, Img3, Img4, Img5, Img6];
  return (
    <div className="p-16 mx-auto">
      <div className="flex flex-row items-center justify-between">
        {images.map((item, index) => (
          <img src={item} alt="" key={index} className="h-12 w-36" />
        ))}
      </div>
    </div>
  );
};

export default Clients;
