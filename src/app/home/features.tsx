import { Card, CardContent } from "ui/components/ui/card";
import Image from "next/image";

export function Features() {
  const features = [
    {
      imgSrc: "/home/features/predictable-throughput.svg",
      alt: "Predictable Throughput at Scale",
      title: "Predictable Throughput at Scale",
      description: "Reference-class architecture designed to eliminate network and interconnect bottlenecks. Tier II design principles at the data center level. 200 Gbit-class networking without reselling the same capacity across multiple customers.",
    },
    {
      imgSrc: "/home/features/from-experiments-to-production.svg",
      alt: "From Experiments to Production",
      title: "From Experiments to Production, Fully Operational",
      description: "Enterprise-grade MLOps delivered as a service, plus proprietary capabilities to improve quality and reduce cost through granular resource accounting across datasets. Tools for experiments, pipelines, versioning, and collaboration.",
    },
    {
      imgSrc: "/home/features/engineer-to-engineer-support.svg",
      alt: "Engineer-to-Engineer",
      title: "Engineer-to-Engineer Support That Prevents Downtime",
      description: "Engineer-to-engineer operations, not scripts and ticket ping-pong. Proactive diagnostics – anomaly detection and outreach before issues turn into downtime.",
    },
    {
      imgSrc: "/home/features/alternative-to-cloud-chaos.svg",
      alt: "The Calm Alternative to Cloud Chaos",
      title: "The Calm Alternative to Cloud Chaos",
      description: "A distraction-free platform for high-stakes compute and experimentation – built for teams that outgrow marketplace chaos and reject the bureaucracy and opacity of hyperscalers.",
    },
    {
      imgSrc: "/home/features/real-metrics.svg",
      alt: "Real Metrics",
      title: "Real Metrics. Real Accountability.",
      description: "Real dashboards with real signals – latency, packet loss, and system health, not just \"up or down.\" Financial accountability – service credits when the SLA is not met.",
    },
    {
      imgSrc: "/home/features/low-latency.svg",
      alt: "Low Latency",
      title: "Low Latency Where It Matters",
      description: "Strategic presence in Armenia and Kazakhstan – low-latency advantages for Central and East Asia and parts of Europe.",
    }
  ];

  return (
    <section className="m-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card
            key={index}
            className={`bg-background ${index === 2 || index === 5 ? 'md:col-span-full lg:col-span-1' : ''}`}
          >
            <CardContent className="p-6 pt-4">
              {/* Icon */}
              <div className="flex justify-end mb-2">
                <Image src={feature.imgSrc} alt={feature.alt} width={48} height={48} />
              </div>

              {/* Title */}
              <h3 className="text-white text-xl font-bold mb-3 leading-tight">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}