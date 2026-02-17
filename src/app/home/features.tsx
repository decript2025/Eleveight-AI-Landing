import Image from "next/image";

const features = [
  {
    icon: "/purpose/i_technologies.svg",
    title: "Technologies",
    description: "Access cutting-edge technologies at the highest level from industry-leading providers",
  },
  {
    icon: "/purpose/i_puzzle.svg",
    title: "Solutions",
    description: "Along with high-performance computing, you benefit from ready-to-use solutions",
  },
  {
    icon: "/purpose/i_user_group.svg",
    title: "Support",
    description: "Even your most complex projects are in good hands with our experienced engineers",
  },
  {
    icon: "/purpose/i_trending_up.svg",
    title: "Eleveight Rise",
    description: "Accelerate your AI development with our advanced technologies and expert team",
  },
  {
    icon: "/purpose/i_beaker.svg",
    title: "Eleveight Lab",
    description: "Every product and solution we offer is grounded in rigorous scientific research",
  },
  {
    icon: "/purpose/i_academic_cap.svg",
    title: "Eleveight Learn",
    description: "We are committed to sharing our knowledge with the community of AI enthusiasts",
  },
  {
    icon: "/purpose/i_sparkles.svg",
    title: "Eleveight Joint",
    description: "Our advanced infrastructure transforms your products into ready-made solutions",
  },
];

export function Features() {
  return (
    <section id="features" className="mx-10 mb-[40px]">
      <h2 className="text-[40px] max-[1180px]:text-[36px] my-5 text-left max-[1180px]:text-center font-bold">Why Eleveight?</h2>
      
      <div className="grid grid-cols-1 min-[600px]:grid-cols-2 xl:grid-cols-4 gap-y-4 min-[600px]:gap-x-[30px] xl:gap-5">
        {features.map((feature, index) => (
          <div 
            key={index}
            className={`text-center xl:text-left min-[600px]:justify-self-center min-[600px]:max-w-[352px] ${index === 2 ? 'min-[600px]:col-span-2 xl:col-span-1' : ''}`}
          >
            <Image 
              src={feature.icon} 
              alt={feature.title}
              width={32}
              height={32}
              className="block mx-auto xl:mx-0"
            />
            <h3 className="text-[26px] font-bold mb-[14px]">{feature.title}</h3>
            <p className="text-base text-background mb-3 leading-[1.5]">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};