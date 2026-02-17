import { Card, CardContent } from "ui/components/ui/card";

export function Features() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      title: "Predictable Throughput at Scale",
      description: "Reference-class architecture designed to eliminate network and interconnect bottlenecks. Tier II design principles at the data center level. 200 Gbit-class networking without reselling the same capacity across multiple customers.",
      borderColor: "border-transparent"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "From Experiments to Production, Fully Operational",
      description: "Enterprise-grade MLOps delivered as a service, plus proprietary capabilities to improve quality and reduce cost through granular resource accounting across datasets. Tools for experiments, pipelines, versioning, and collaboration.",
      borderColor: "border-transparent"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Engineer-to-Engineer Support That Prevents Downtime",
      description: "Engineer-to-engineer operations, not scripts and ticket ping-pong. Proactive diagnostics – anomaly detection and outreach before issues turn into downtime.",
      borderColor: "border-transparent"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: "The Calm Alternative to Cloud Chaos",
      description: "A distraction-free platform for high-stakes compute and experimentation – built for teams that outgrow marketplace chaos and reject the bureaucracy and opacity of hyperscalers.",
      borderColor: "border-transparent"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Real Metrics. Real Accountability.",
      description: "Real dashboards with real signals – latency, packet loss, and system health, not just \"up or down.\" Financial accountability – service credits when the SLA is not met.",
      borderColor: "border-transparent"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Low Latency Where It Matters",
      description: "Strategic presence in Armenia and Kazakhstan – low-latency advantages for Central and East Asia and parts of Europe.",
      borderColor: "border-purple-500"
    }
  ];

  return (
    <section className="my-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card
            key={index}
            className={`bg-black border-2 ${feature.borderColor} hover:border-green-500 transition-all`}
          >
            <CardContent className="p-6">
              {/* Icon */}
              <div className="flex justify-end mb-4">
                {feature.icon}
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