import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const images = [
  {
    id: 1,
    image: "https://i.ibb.co/DPhZrSBc/image-5.jpg",
  },
  {
    id: 2,
    image: "https://i.ibb.co/FLtP6fvc/image-1.jpg",
  },
  {
    id: 3,
    image: "https://i.ibb.co/JwMF8Jzq/image-4.jpg",
  },
  {
    id: 4,
    image: "https://i.ibb.co/2Yv9q5RT/image-3.jpg",
  },
  {
    id: 5,
    image: "https://i.ibb.co/1GF4dZGF/image-2.jpg",
  },
];

const Slider = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <div className="  w-screen h-screen overflow-hidden relative">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}>
        <CarouselContent className="h-full">
          {images.map((image) => (
            <CarouselItem key={image.id} className="h-full w-full">
              <div className="w-full h-screen overflow-hidden">
                <img
                  src={image.image}
                  alt="Slide"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-white/70 hover:bg-white text-black" />
        <CarouselNext className="absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-white/70 hover:bg-white text-black" />
      </Carousel>
    </div>
  );
};

export default Slider;
