import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {
  Rating,
  LastFivePost,
  Gender,
  RacingLine,
  BestTime,
} from "./CarouselComponent";

const CarouselTable = () => {
  //carousal container
  return (
    <Carousel
      showArrows={true}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={8000} // Change the interval as needed (in milliseconds)
      transitionTime={1000}
    >
      <div className="flex justify-center">
        <Rating />
      </div>
      <div className="flex justify-center">
        <LastFivePost />
      </div>
      <div className="flex justify-center">
        <Gender />
      </div>
      <div className="flex justify-center">
        <RacingLine />
      </div>
      <div className="flex justify-center">
        <BestTime />
      </div>
    </Carousel>
  );
};

export default CarouselTable;
