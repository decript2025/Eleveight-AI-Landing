import { PlatformHero } from "./hero";
import { PlatformOverview } from "./overview";

export default function Platform() {
  return (
    <div>
      <PlatformHero />
      
      <PlatformOverview />
    </div>
  );
}