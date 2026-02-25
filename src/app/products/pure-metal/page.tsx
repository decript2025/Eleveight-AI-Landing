import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'ui/components/ui/button';

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

export default function PureMetal() {
  return (
    <section className="p-2 sm:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6">
        {/* Left column */}
        <div className="flex flex-col gap-4">
          {/* Hero image */}
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
            <Image
              src="/products/pure-metal-hero.jpg"
              alt="Pure Metal"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Title */}
          <h1 className="flex items-center gap-3 text-background text-[32px]/[48px] font-semibold">
            <span className="text-background text-lg">■</span>
            Pure Metal
          </h1>

          {/* Lead paragraph */}
          <p className="text-[#857E76] text-xl/8">
            Pure Metal is a GPU-enabled virtual machine rental service for AI workloads where
            near bare-metal performance and a consistent, predictable configuration matter,
            without the operational overhead of complex provisioning. The virtual machines are
            delivered ready for training and inference so teams can start compute jobs quickly
            and scale projects without building and maintaining the underlying infrastructure
            themselves.
          </p>

          {/* Detail paragraph 1 */}
          <p className="text-[#050505] text-sm leading-relaxed">
            In Pure Metal, the GPU is assigned to the virtual machine via PCI Express
            passthrough, giving the guest OS native access to the accelerator. For distributed
            workloads, GPU resources are dynamically interconnected through a high-speed
            InfiniBand fabric, providing a foundation for intensive data exchange between nodes
            in GPU-centric scenarios. Each configuration includes 20 CPU cores per GPU, helping
            balance CPU and GPU utilization in typical AI pipelines and supporting data
            preparation and auxiliary compute alongside model execution.
          </p>

          {/* Detail paragraph 2 */}
          <p className="text-[#050505] text-sm leading-relaxed">
            Every Pure Metal VM includes fast NVMe-based storage suited for datasets,
            checkpoints, and scratch space, and is complemented by scalable storage designed
            for GPU-intensive AI workloads, accommodating data growth and high I/O demands.
          </p>

          <div className="flex justify-center">
            <Button asChild>
              <Link href="/contacts">Talk to our team</Link>
            </Button>
          </div>
        </div>

        {/* Right column – feature cards */}
        <div className="flex flex-col gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/70 rounded-2xl p-6 shadow-sm border border-background/5"
            >
              <h3 className="text-background font-semibold text-xl/8 mb-1.5">{feature.title}</h3>
              <p className="text-background/55 text-sm/5">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
