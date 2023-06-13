import React, { useEffect, useState } from "react";
import img1 from "../assets/img1.jpg";
import img3 from "../assets/img3.jpg";
import img2 from "../assets/img2.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const EventsGallery = () => {
  const spanStyle = {
    padding: "20px",
    background: "#efefef",
    color: "#000000",
  };

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "400px",
  };
  // const
  const [displayImage, setdisplayImage] = useState(0);
  const gallery = [img1, img2, img3, img8, img7];
  const dispArr = [1, 2, 3, 4, , 5];
  const handleImageRight = () => {
    setdisplayImage((prev) =>
      prev === gallery.length - 1 ? (prev = 0) : prev + 1
    );
  };
  const handleImageLeft = () => {
    setdisplayImage((prev) =>
      prev === 0 ? (prev = gallery.length - 1) : prev - 1
    );
  };
  const [num, setnum] = useState(0);
  useEffect(() => {}, []);
  const slideImages = [
    {
      url: img1,
      caption: "Slide 1",
    },
    {
      url: img2,
      caption: "Slide 2",
    },
    {
      url: img3,
      caption: "Slide 3",
    },
  ];

  return (
    <div className=" w-full  justify-center pt-5 gap-10 flex-wrap h-fit px-7 items-center flex">
      <h1 className="text-4xl mb-1 text-gray-600">Recent Events</h1>
      <div></div>
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              >
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
      {/*      
        <div className=" relative w-full shadow-lg shadow-gray-600 px-0 bg-orange-500 overflow-hidden rounded h-[50vh]  md:h-[600px] py-0">
          <div className="w-full h-full absolute top-0 left-0 opacity-30"></div>
          <h1
            onClick={handleImageLeft}
            className="   h-[30px] w-[30px] flex items-center justify-center bg-orange-500 text-gray-200  z-30 absolute top-1/2 -translate-y-1/2 font-bold cursor-pointer rounded-full left-3"
          >
            {" "}
            {"<"}{" "}
          </h1>
          <img
            src={gallery[displayImage]}
            className=" object-cover  w-full h-[90%]"
            alt=""
          />

          <p className="relative px-4 py-2 text-white">
            Cultural Day of The Kids
          </p>
          <h1
            onClick={handleImageRight}
            className="z-30 h-[30px] w-[30px] flex items-center justify-center bg-orange-500 text-gray-200  absolute top-1/2 -translate-y-1/2 right-2  font-bold cursor-pointer rounded-full "
          >
            {" "}
            {">"}{" "}
          </h1>
        </div> */}
    </div>
  );
};

export default EventsGallery;
