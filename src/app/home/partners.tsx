'use client'

import Image from "next/image";

const partners = [
  { src: "/partners/csi_logo.png", alt: "CSI Logo" },
  { src: "/partners/ep_logo.png", alt: "EP Logo" },
  { src: "/partners/decript_logo.png", alt: "Decript Logo" },
  { src: "/partners/xart_logo.png", alt: "Xart Logo" },
  { src: "/partners/digidata_logo.png", alt: "DigiData Logo" },
  { src: "/partners/uwc_dilijan_logo.png", alt: "UWC Dilijan Logo" },
  { src: "/partners/yn_logo.png", alt: "Yn Logo" },
  { src: "/partners/aica_logo.png", alt: "Aica Logo" },
  { src: "/partners/eqwefy_logo.png", alt: "Eqwefy Logo" },
  { src: "/partners/brand-logo.svg", alt: "Brand Logo" },
  { src: "/partners/maia-header.svg", alt: "Main Header Logo" },
];

export function Partners() {
  // Duplicate partners array for seamless infinite loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="mx-10 mb-[25px]">
      <h2 className="text-[40px] my-5 text-left max-[1180px]:text-center font-bold">Our Partners</h2>
      
      <div className="overflow-hidden whitespace-nowrap mx-auto text-center">
        <div className="inline-flex items-center animate-[slide_15s_linear_infinite]">
          {duplicatedPartners.map((img, index) => (
            <div
              key={`${img.alt}-${index}`}
              className="flex-shrink-0 mx-6"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={150}
                height={150}
                className="h-[150px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>  
    </div>
  );
};