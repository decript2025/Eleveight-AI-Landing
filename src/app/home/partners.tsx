'use client'

import Image from "next/image";

const partners = [
  { src: "/partners/aica_logo.png", alt: "CSI Logo" },
  { src: "/partners/csi_logo.png", alt: "EP Logo" },
  { src: "/partners/decript_logo.png", alt: "Decript Logo" },
  { src: "/partners/digidata_logo.png", alt: "Xart Logo" },
  { src: "/partners/ep_logo.png", alt: "DigiData Logo" },
  { src: "/partners/eqwefy_logo.png", alt: "eqwefy Logo" },
  { src: "/partners/g-next_logo.png", alt: "g-Next Logo" },
  { src: "/partners/maia_logo.png", alt: "maia Logo" },
  { src: "/partners/uwc_dilijan_logo.png", alt: "UWC Logo" },
  { src: "/partners/xart_logo.png", alt: "Xart Logo" },
  { src: "/partners/yn_logo.png", alt: "Yn Logo" },
];

export function Partners() {
  // Duplicate partners array for seamless infinite loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="mt-[8px] mb-[10px]">      
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
                width={95}
                height={76}
                className="h-[76px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>  
    </div>
  );
};