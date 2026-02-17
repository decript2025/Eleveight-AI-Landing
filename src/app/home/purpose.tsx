"use client";

import { Card, CardContent } from "ui/components/ui/card";
import Image from "next/image";

export function Purpose() {
  const purposeCards = [
    {
      image: "/purpose/qualified-users.jpg",
      title: "For qualified users",
      tagline: "Power without noise.",
      description: "Clean, direct access to compute, without marketplace chaos.",
      features: [
        "Dedicated next-gen GPU servers with no \"noisy neighbors\"",
        "You control the software environment, we guarantee infrastructure behavior",
        "Engineer-to-engineer support, no scripts, no call-center layer",
        "Reference-class architecture designed to remove network bottlenecks"
      ]
    },
    {
      image: "/purpose/startups.jpg",
      title: "For startups and product teams",
      tagline: "Engineered for speed.",
      description: "Launch training and inference fast, without building infrastructure first.",
      features: [
        "On-demand GPU rental for training and inference, clean instance categories, pay for actual usage",
        "Kubernetes as a service for deployments",
        "Production MLOps for experiments, pipelines, versioning, and collaboration",
        "Enterprise-grade tooling delivered as a platform, not a DIY project"
      ]
    },
    {
      image: "/purpose/enterprise.jpg",
      title: "For enterprise",
      tagline: "Infrastructure that survives audits.",
      description: "Security and transparency are built into the core.",
      features: [
        "Physically isolated racks or dedicated machine halls",
        "Custom SLA, individual network architecture, integration with corporate security systems",
        "Local data storage and traceable operational transparency, down to performance metrics and energy provenance"
      ]
    }
  ];

  return (
    <section className="my-[100px]">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
          Predictable compute you can scale with confidence
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {purposeCards.map((card, index) => (
          <Card 
            key={index}
            className="overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow"
          >
            {/* Image */}
            <div className="relative w-full h-48 bg-gray-200">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                onError={(e) => {
                  // Fallback to gray background if image not found
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            <CardContent className="p-6">
              {/* Title */}
              <h3 className="text-xl font-bold text-black mb-2">
                {card.title}
              </h3>

              {/* Tagline */}
              <p className="text-green-600 font-semibold mb-3">
                {card.tagline}
              </p>

              {/* Description */}
              <p className="text-black text-sm mb-4 leading-relaxed">
                {card.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {card.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="text-black text-sm leading-relaxed flex gap-2"
                  >
                    <span className="text-black mt-1 flex-shrink-0">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}