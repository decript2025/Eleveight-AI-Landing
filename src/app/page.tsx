
import { Deployment } from "./home/deployment";
import { Features } from "./home/features";
import { GetStarted } from "./home/get-started";
import { GreenPower } from "./home/green-power";
import { Hero } from "./home/hero";
import { Partners } from "./home/partners";
import { Purpose } from "./home/purpose";
import { ViewPricing } from "./home/view-pricing";



export default function Home() {
  return (
    <div id="top">
      <Hero />
      <Partners />

      <div className="px-[56px] py-4 flex flex-col gap-2">
        <h2 className="text-background text-center text-h2">Stop losing performance to infrastructure noise</h2>
        <p className="text-background text-center font-normal">Breakthrough models fail on basics: power, cooling, network contention, noisy neighbors, oversubscription, and opaque metrics.
          Eleveight removes infrastructure friction and restores control.</p>
      </div>

      <Deployment />
      <Purpose />

      <div className="flex justify-center gap-4 p-6">
        <GetStarted />
        <ViewPricing />
      </div>

      <GreenPower />
      <Features />
    </div>
  );
}
