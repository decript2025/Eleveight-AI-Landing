import { About } from "./home/about";
import { Features } from "./home/features";
import Hero from "./home/hero";
import { Partners } from "./home/partners";
import UseCases from "./home/UseCases";


export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Features />
      <UseCases />
      <Partners />
    </div>
  );
}
