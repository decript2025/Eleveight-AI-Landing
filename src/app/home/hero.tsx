import { Button } from "ui/components/ui/button";
import { ViewPricing } from "./view-pricing";

export function Hero() {
  return (
    <div className="bg-[url(public/home/splash.jpg)] md:h-[376px] h-[472px] bg-[80%_50%] [background-size:230%] md:[background-size:142%] bg-no-repeat rounded-[32px]">
      <div className="flex flex-col justify-center items-center p-10 xl:px-60 lg:px-[10vw] px-4 gap-[6vw] sm:gap-8 md:gap-4">
        <span className="text-foreground font-normal border border-[#17a245] rounded-[99px] w-fit py-1 px-4 bg-[#009933] text-[12px]">
          NVIDIA B300 clusters available in Armenia
        </span>

        <h1 className="text-background md:text-[48px]/[64px] text-[32px]/[48px] text-center font-bold">
        Compute. Innovate. Elevate</h1>

        <p className="text-background text-center md:text-[20px]/[32px] text-[16px]/[24px] font-normal">
          Industrial-grade cloud GPU infrastructure with predictable performance and engineer-to-engineer support.
          <b> Next-generation NVIDIA GPUs (B300)</b> delivered as a dependable business tool, not a roulette wheel.
        </p>

        <div className="flex justify-center items-center gap-4">
          <Button variant="default">Launch GPU instance</Button>
          <ViewPricing />
        </div>
      </div>
    </div>
  );
};