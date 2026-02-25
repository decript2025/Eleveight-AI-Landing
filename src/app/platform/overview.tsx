import { Deployment } from "app/home/deployment";
import Image from "next/image";

export function PlatformOverview() {
  const stats = [
    {
      desc: 'Total peak performance up to',
      value: '9,216 PFLOPS',
      src: '/platform/overview/total_up_to.jpg',
      alt: 'Total peak',
    },
    {
      desc: 'Total power capacity of',
      value: '1.2 MW',
      src: '/platform/overview/total_power.jpg',
      alt: 'Total power',
    },
    {
      desc: 'Fully compliant with the global availability standard of',
      value: 'TIER III',
      src: '/platform/overview/tier.jpg',
      alt: 'TIER III',
    },
  ];

  const features = [
    {
      title: 'Compute without noise',
      desc: 'A clean path to performance without noisy neighbors, oversold network capacity, or surprise slowdowns. Built for teams that outgrew the chaos of low-cost marketplaces but do not want the faceless bureaucracy of hyperscale clouds.',
    },
    {
      title: 'DevOps-led technical support',
      desc: 'Technical support delivered by DevOps and specialized engineers, with clear, architecture-aware guidance tailored to your workloads, without call-center scripting.',
    },
    {
      title: 'Reference-grade performance',
      desc: 'Dell reference architecture with no network or interconnect bottlenecks. Data centers designed to Tier III requirements.',
    },
    {
      title: 'Transparency you can verify',
      desc: 'Detailed dashboards – network latency, packet loss, system health. Visibility into performance metrics and energy provenance.',
    },
    {
      title: 'Energy efficiency as an engineering standard',
      desc: 'Green energy with Tier III redundancy. PUE available online. Customer invoices include a carbon footprint reduction calculator.',
    },
  ];

  return (
    <section className="px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 lg:gap-14">
        {/* Left column */}
        <div className="flex flex-col gap-6">
          <h2 className="text-background text-h2 font-bold">
            Eleveight.ai – a distraction-free platform for MLOps and high-load GPU compute
          </h2>

          <p className="text-background/60 text-sm leading-relaxed">
            Eleveight.ai delivers the compute of the latest NVIDIA GPUs (B300) as a predictable
            business tool, backed by full engineering support and verified data-center energy
            efficiency.
          </p>

          <p className="text-background/80 text-sm leading-relaxed">
            <strong className="font-semibold text-background">The core – stability for speed.</strong>{' '}
            We handle the hard infrastructure work – power, cooling, networking, operations. You
            accelerate training and inference without fighting the environment.
          </p>

          {/* Stat cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
            {stats.map((stat, idx) => (
              <div
                key={stat.src}
                className={`relative overflow-hidden rounded-2xl min-h-[250px] xl:col-span-1 ${idx === 2 ? 'md:col-span-full' : 'md:col-span-1'}`}
              >
                <Image src={stat.src} alt={stat.alt} layout="fill" sizes="fill" objectFit="cover" className="z-0" />
                <div className="z-1 text-foreground grid grid-rows-3 grid-rows-[1fr_2fr]">
                  <p className="absolute top-4 left-4 text-[14px]/[20px] uppercase tracking-wide leading-snug font-medium">
                    {stat.desc}
                  </p>
                 <span className="absolute bottom-4 right-4 text-[48px]/[64px] font-bold leading-tight text-right">{stat.value}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-background/60 text-sm leading-relaxed">
            Eleveight AI Cloud is a scalable, high performance cloud platform built for modern
            compute needs designed from virtual machines and containerized environments to full
            scale AI training, profiling and fine-tuning.
          </p>

          <p className="text-background/60 text-sm leading-relaxed">
            Powered by advanced GPU clusters and optimized for both startups and enterprises.
          </p>
        </div>

        {/* Right column – feature cards */}
        <div className="flex flex-col gap-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-foreground/70 rounded-2xl px-5 py-4 shadow-sm border border-background/5"
            >
              <h3 className="text-background text-[20px]/[32px] font-semibold text-sm mb-1.5">{feature.title}</h3>
              <p className="text-background text-sm leading-5">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <Deployment />
    </section>
  );
}
