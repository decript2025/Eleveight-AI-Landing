export function About() {
  return (
    <section id="about" className="relative md:px-8 text-center mb-[60px]">
      <div className="relative w-screen m-auto left-0 right-0 md:w-auto md:max-w-[800px] pt-[50px] md:pt-20 px-[28px] md:px-8 pb-[32px] md:pb-8 bg-[#1E1D21] text-white overflow-hidden [clip-path:polygon(0_0,100%_0,100%_96%,0_100%)] md:[clip-path:none] mt-10 md:-rotate-[4deg]">
        <div className="md:rotate-[4deg] text-left md:pt-[15px] md:px-[10px]">
          <h2 className="text-[26px] leading-[32px] mb-[22px] font-bold">
            Most advanced infrastructure for artificial intelligence in the region
          </h2>
          
          <p className="mb-3 text-[16px] leading-5">
            Eleveight AI is a next-generation, Armenian, specialized tech center built with a focus on artificial intelligence workloads. Located in Yerevan, Eleveight AI is set to become the largest AI data center in the region, both in terms of scale and technological sophistication.
          </p>
          
          <p className="mb-3 text-[16px] leading-5">
            The facility is powered by high-performance NVIDIA DGX SuperPOD systems, ensuring maximum efficiency in handling machine learning, deep learning, and other compute-intensive tasks.
          </p>
        </div>
      </div>
    </section>
  );
};