import Img1 from "../assets/clients/coinbase.png";
import Img2 from "../assets/clients/spotify.png";
import Img3 from "../assets/clients/slack.png";
import Img4 from "../assets/clients/dropbox.png";
import Img5 from "../assets/clients/webflow.png";
import Img6 from "../assets/clients/zoom.png";

const Clients = () => {
  const images = [Img1, Img2, Img3, Img4, Img5, Img6];

  return (
    <div className="py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-8 md:px-16 lg:px-32 mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 sm:gap-6 md:gap-4">
        {images.map((item, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={item}
              alt={`Client logo ${index + 1}`}
              className="h-8 sm:h-10 md:h-12 object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
