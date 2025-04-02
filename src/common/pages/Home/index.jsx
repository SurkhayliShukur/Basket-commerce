import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../../assets/imgs/img1.jpg'
import img2 from '../../../assets/imgs/img2.jpg'
import img3 from '../../../assets/imgs/img3.jpg'
import img4 from '../../../assets/imgs/img4.jpg'
import img5 from '../../../assets/imgs/img5.jpg'
const imgs = [
  { id: 1, src: img1, title: "Image 1" },
  { id: 5, src: img5, title: "Image 5" },
  { id: 4, src: img4, title: "Image 4" },
  { id: 2, src: img2, title: "Image 2" },
  { id: 3, src: img3, title: "Image 3" },
];

const CustomArrow = ({ className, style, onClick, direction }) => {
  return (
    <button
      className={`${className} ${
        direction === "left" ? "left-1" : "right-6"
      } absolute top-1/2 transform -translate-y-1/2 z-10`}
      style={{
        ...style,
        display: "block",
        borderRadius: "50%",
        padding: "10px",
      }}
      onClick={onClick}
    >
      {direction === "left" ? "<" : ">"}
    </button>
  );
};

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
  };

  return (
    <>
      <div className="hidden md:block">
        <Slider {...settings}>
          {imgs.map((img) => (
            <div key={img.id} className="z-10">
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-[85vh] md:h-[83.5vh] object-cover mb-1 "
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="block md:hidden">
        <div className="z-10">
          <img
            src={img1}
            alt="image"
            className="w-full h-[92vh] object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
