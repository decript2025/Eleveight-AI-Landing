'use client'

import Image from "next/image";

const partners = [
  { src: "/home/partners/aica_logo.png", alt: "CSI Logo" },
  { src: "/home/partners/csi_logo.png", alt: "EP Logo" },
  { src: "/home/partners/decript_logo.png", alt: "Decript Logo" },
  { src: "/home/partners/digidata_logo.png", alt: "Xart Logo" },
  { src: "/home/partners/ep_logo.png", alt: "DigiData Logo" },
  { src: "/home/partners/eqwefy_logo.png", alt: "eqwefy Logo" },
  { src: "/home/partners/g-next_logo.png", alt: "g-Next Logo" },
  { src: "/home/partners/maia_logo.png", alt: "maia Logo" },
  { src: "/home/partners/uwc_dilijan_logo.png", alt: "UWC Logo" },
  { src: "/home/partners/xart_logo.png", alt: "Xart Logo" },
  { src: "/home/partners/yn_logo.png", alt: "Yn Logo" },
];

export function Partners() {
  // Duplicate partners array for seamless infinite loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="mt-[8px] mb-[10px]">      
      <div className="overflow-hidden whitespace-nowrap mx-auto text-center">
        <div className="inline-flex items-center animate-[slide_10s_linear_infinite] gap-[22px]">
          {duplicatedPartners.map((img, index) => (
            <div
              key={`${img.alt}-${index}`}
              className="flex-shrink-0"
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