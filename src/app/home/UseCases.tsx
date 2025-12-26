'use client'

import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "ui/carousel";
import type { CarouselApi } from "ui/carousel";

const images: { src: string; mobileSrc: string; alt: string }[] = [
  { src: "/use-cases/gen2b.jpg", mobileSrc: "/use-cases/Gen2b_mob.png", alt: "Use case 1" },
  { src: "/use-cases/krisp.jpg", mobileSrc: "/use-cases/Krisp_mob.png", alt: "Use case 2" },
  { src: "/use-cases/render.jpg", mobileSrc: "/use-cases/Render_mob.png", alt: "Use case 3" },
  { src: "/use-cases/hecttor.jpg", mobileSrc: "/use-cases/hecttor_mob.jpg", alt: "Use case 4" },
  { src: "/use-cases/leaping.png", mobileSrc: "/use-cases/leaping_mob.png", alt: "Use case 5" },
  { src: "/use-cases/satisfai.png", mobileSrc: "/use-cases/satisfai_mob.png", alt: "Use case 6" },
];

export function UseCases() {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(images.length);

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  React.useEffect(() => {
    if (!api) return;
    const id = setInterval(() => {
      api.scrollNext();
    }, 3500);
    return () => clearInterval(id);
  }, [api]);
  return (
    <section id="use-cases" className="mb-[60px] flex flex-col items-center px-5 md:px-10">
      <div className="w-full max-w-[2580px]">
        <h2 className="text-[40px] max-[1180px]:text-[36px] my-5 text-left max-[1180px]:text-center font-bold">Use Cases</h2>

        <div className="relative max-md:flex max-md:flex-col max-md:items-center">
          <Carousel
            opts={{ align: "start", loop: true }}
            setApi={setApi}
            className="w-full max-md:w-auto"
          >
          <CarouselContent className="max-md:-ml-0">
            {images.map((img, index) => (
              <CarouselItem key={index} className="max-md:pl-0 max-md:flex max-md:justify-center">
                <div className="rounded-[12px] overflow-hidden">
                  <picture>
                    <source media="(max-width: 768px)" srcSet={img.mobileSrc} />
                    <img src={img.src} alt={img.alt} className="w-full h-auto object-cover max-md:max-w-[75vw]" />
                  </picture>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
          <div className="flex items-center justify-center gap-2 mt-4 max-md:mt-6">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => api?.scrollTo(i)}
                className={
                  `h-2.5 w-2.5 rounded-full transition-colors ${
                    i === current ? 'bg-black/80' : 'bg-black/30'
                  }`
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default UseCases;


