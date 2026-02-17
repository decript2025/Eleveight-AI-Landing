import { Card, CardContent, CardHeader, CardTitle } from "ui/components/ui/card";

export function Deployment() {
  const deploymentOptions = [
    {
      icon: "■",
      iconColor: "text-green-500",
      title: "Pure Metal",
      features: [
        "Dedicated next-gen servers with no noisy neighbors",
        "You control the software stack",
        "We own infrastructure reliability end to end"
      ]
    },
    {
      icon: "◆",
      iconColor: "text-green-500",
      title: "Growth Fabric",
      features: [
        "AI Cloud for training and inference with clear instance classes",
        "Consumption-based pricing aligned to actual usage",
        "Kubernetes as a service",
        "MLOps delivered as a platform"
      ]
    },
    {
      icon: "●",
      iconColor: "text-green-500",
      title: "Private Compute",
      features: [
        "Physically isolated racks or dedicated machine halls",
        "Custom network design for your traffic patterns",
        "Integration with corporate security controls",
        "Tailored SLA and operating procedures"
      ]
    },
    {
      icon: "▲",
      iconColor: "text-green-500",
      title: "Model Marketplace",
      features: [
        "Deployed open-source models ready to run",
        "Instant launch and evaluation inside our environment",
        "Pay only for the compute you consume"
      ]
    }
  ];

  return (
    <section className="mt-[50px] mb-[100px]">
      <div className="border-4 border-[#FF6B35] rounded-3xl bg-black p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FF6B35] mb-4">
            Four ways to deploy with Eleveight
          </h2>
          <p className="text-white text-lg md:text-xl">
            Choose the operating model that matches your performance, control, and compliance requirements.
          </p>
        </div>

        {/* Deployment Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deploymentOptions.map((option, index) => (
            <Card 
              key={index} 
              className="bg-gray-200 border-none shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <span className={`${option.iconColor} text-2xl`}>
                    {option.icon}
                  </span>
                  <span className="text-black font-bold">{option.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {option.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="text-black text-sm leading-relaxed flex gap-2"
                    >
                      <span className="text-black mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}