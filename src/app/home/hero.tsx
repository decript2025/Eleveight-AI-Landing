import { Button } from "ui/components/ui/button";
import { ViewPricing } from "./view-pricing";

export function Hero() {
  return (
    <div className="bg-[url(public/home/splash.jpg)] h-[376px] bg-[80%_50%] [background-size:142%] bg-no-repeat rounded-[32px]">
      <div className="flex flex-col justify-center items-center p-10 px-64 gap-4">
        <span className="text-foreground font-normal border border-[#17a245] rounded-[99px] w-fit py-2 px-4 bg-[#009933] text-[12px]">
          NVIDIA B300 clusters available in Armenia
        </span>

        <h1 className="text-background text-[48px] font-bold">
        Compute. Innovate. Elevate</h1>

        <p className="text-background text-center text-[22px]/[32px] font-normal">
          Industrial-grade cloud GPU infrastructure with predictable performance and engineer-to-engineer support.
          Next-generation NVIDIA GPUs (B300) delivered as a dependable business tool, not a roulette wheel.
        </p>

        <div className="flex justify-center items-center gap-4">
          <Button variant="default">Launch GPU instance</Button>
          <ViewPricing />
        </div>
      </div>
    </div>
  );
};