import React, { useState, useEffect, useRef } from "react";
import { Card } from "./Card";
import { useCategoryContext } from "./CategoryContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  title: string;
}

interface ArrowProps {
  onClick?: () => void;
}

// Custom Next Arrow Component
const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <img
    className=" w-[24px] h-[24px] cursor-pointer"
    src={"/img/forward.png"}
    alt="Forward"
    onClick={onClick}
  />
);

// Custom Prev Arrow Component
const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <img
    className=" w-[24px] h-[24px] cursor-pointer"
    src={"/img/back.png"}
    alt="Back"
    onClick={onClick}
  />
);

export function CardList({ title }: Props) {
  const [data] = useState([
    {
      src: "/img/HotelImg1.png",
      title: "Yasuragi",
      location: "Stockholm, Sverige",
      description: "Upplev ett Spa i japansk anda.",
    },
    {
      src: "/img/HotelImg2.png",
      title: "Steam Hotel",
      location: "Västerås, Sverige",
      description: "Upplev ett Spa i japansk anda.",
    },
    {
      src: "/img/HotelImg3.svg",
      title: "The Wood Hotel",
      location: "Skellefteå, Sverige",
      description: "Boende i vackert Superiorrum.",
    },
    {
      src: "/img/HotelImg4.svg",
      title: "KOSTA BODA ART HOTEL WITH A TWO ROW TITLE",
      location: "Stockholm, Sverige",
      description: "Övernattning med tillgång till spa.",
    },
    {
      src: "/img/HotelImg2.png",
      title: "Another Hotel",
      location: "Gothenburg, Sverige",
      description: "En trevlig vistelse med spa.",
    },
    {
      src: "/img/HotelImg4.svg",
      title: "Final Hotel",
      location: "Malmö, Sverige",
      description: "Upplev det bästa av Skandinavien.",
    },
  ]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { selectedCategory, setSelectedCategory } = useCategoryContext();

  const sliderRef = useRef<Slider>(null);

  const seeAll = () => {
    if (selectedCategory) {
      setSelectedCategory(null);
    }
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getSlidesToShow = () => {
    if (windowWidth <= 553) return 1;
    if (windowWidth <= 830) return 2;
    if (windowWidth <= 1105) return 3;
    return 4;
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className=" mt-[43px] mx-auto ">
      <div className="flex justify-between h-[32px] mb-[16px] font-bold">
        <div className="text-[24px]">{title}</div>
        <div className="flex items-center gap-[10px]">
          <div className="text-[16px] cursor-pointer" onClick={seeAll}>
            See All
          </div>
          <div className=" flex gap-[8px]">
            <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
            <NextArrow onClick={() => sliderRef.current?.slickNext()} />
          </div>
        </div>
      </div>
      <Slider ref={sliderRef} {...sliderSettings} >
        {data.map((item, index) => (
          <Card
            src={item.src}
            key={index}
            category={title}
            title={item.title}
            location={item.location}
            description={item.description}
          />
        ))}
      </Slider>
    </div>
  );
}
