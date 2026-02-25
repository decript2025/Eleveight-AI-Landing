import { Button } from "ui/components/ui/button";
import { ViewPricing } from "./view-pricing";

export function Hero() {
  return (
    <div className="bg-[url(public/home/hero.jpg)] md:h-[376px] sm:h-[472px] h-[600px] bg-[80%_50%] [background-size:310%] sm:[background-size:230%] md:[background-size:142%] bg-no-repeat rounded-[32px]">
      <div className="flex flex-col justify-center items-center p-10 xl:px-60 lg:px-[10vw] px-4 gap-5 sm:gap-[6vw] md:gap-8">
        <span className="text-foreground font-normal border border-[#17a245] rounded-[99px] py-1 px-2 sm:px-4 bg-[#009933] text-[10px]/[14px] sm:text-[12px]/[16px]">
          NVIDIA B300 clusters available in Armenia
        </span>

        <h1 className="text-background text-h1 text-center">
        Compute. Innovate. Elevate</h1>

        <p className="text-background text-center sm:text-[20px]/[26px] text-[20px]/[32px] font-normal">
          Industrial-grade cloud GPU infrastructure with predictable performance and engineer-to-engineer support.
          <b> Next-generation NVIDIA GPUs (B300)</b> delivered as a dependable business tool, not a roulette wheel.
        </p>

        <div className="flex justify-center sm:flex-row items-center gap-2 sm:gap-4">
          <Button variant="default">Launch GPU instance</Button>
          <ViewPricing />
        </div>
      </div>
    </div>
  );
};