import Image from 'next/image';
import { createServerApiClient } from 'lib/api-client';

interface TeamMember {
  id: number;
  linkedin: string | null;
  Fullname: string;
  Position: string;
  Bio?: string;
  Image?: {
    url: string;
  };
  Order: number;
  createdAt: string;
  documentId: string;
  publishedAt: string | null;
  updatedAt: string;
}

interface TeamsResponse {
  data: TeamMember[];
}

async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    // Use centralized API client - handles errors, timeouts, retries automatically
    const serverApi = createServerApiClient({ revalidate: 60 });
    const data = await serverApi.get<TeamsResponse>('/teams?populate=Image');
    return data.data || [];
  } catch {
    // Error is already logged by api-client, just return empty array
    return [];
  }
}

export default async function CompanyPage() {
  const teamMembers = await getTeamMembers();

  return (
    <div className="min-h-screen bg-white text-black">      
      <main className="pt-24">
        <div className="container mx-auto px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
            Empowering AI infrastructure & data innovation
            </h1>
            
            <div className="prose prose-lg mx-auto text-black">
              <p className="text-xl mb-8 text-left text-gray-600">
              Eleveight AI is dedicated data cluster under DIGI Data – the largest colocated data center in Armenia, with an installed capacity of 20 MW. Leveraging the technological and infrastructural foundation of DIGI Data, the project ensures high reliability, scalability, and full compliance with the most advanced industry standards.
              </p>
              
              <div className="grid md:grid-cols-2 gap-12 mt-16">
                <div>
                  <h2 className="text-2xl text-center md:text-5xl font-semibold mb-4">Our Mission</h2>
                  <p className="text-gray-600 text-center leading-relaxed">
                  To empower the next generation of artificial intelligence by providing world-class infrastructure, computing power, and scientific expertise — enabling innovators, researchers, and enterprises to turn their most ambitious ideas into reality.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl text-center md:text-5xl font-semibold mb-4">Our Vision</h2>
                  <p className="text-gray-600 text-center leading-relaxed">
                  To establish Armenia as a leading hub for AI innovation and data infrastructure — where technology, research, and industry unite to accelerate global progress.
                  </p>
                </div>
              </div>
              
              <div className="mt-16">
                <h2 className="text-2xl text-center md:text-5xl font-semibold mb-6">Our Values</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2">Innovation</h3>
                    <p className="text-sm text-gray-600">
                    We pioneer advancements in AI infrastructure and data technologies, constantly exploring new ways to accelerate the future of artificial intelligence.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2">Accessibility</h3>
                    <p className="text-sm text-gray-600">
                    We make cutting-edge computing power and AI resources available to innovators and enterprises of all sizes — fostering equal opportunity in the global tech ecosystem.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2">Excellence</h3>
                    <p className="text-sm text-gray-600">
                    We deliver uncompromising quality across every layer of our work — from engineering and data center operations to customer experience and research partnerships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

                  {/* Team Members Section */}
                  <div className="max-w-7xl mx-auto mb-20 px-8">
            <h2 className="text-2xl text-center md:text-5xl font-semibold mb-8">
              Our Team
            </h2>
            
            {teamMembers.length === 0 ? (
              <div className="text-center text-gray-600">No team members available.</div>
            ) : (
              <>
                {/* Mobile: 1 column, Tablet: 3 columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:hidden gap-y-8 md:gap-y-12">
                  {teamMembers.map((member) => (
                    <div key={member.id} className="flex flex-col items-center text-center">
                      {member.Image?.url && (
                        <div className="relative mb-4 overflow-hidden">
                          <Image
                            src={`https://console.eleveight.ai${member.Image.url}`}
                            alt={member.Fullname}
                            width={234}
                            height={233}
                          />
                        </div>
                      )}
                      <h3 className="text-lg font-bold mb-1">{member.Fullname}</h3>
                      <p className="text-sm text-gray-600">{member.Position}</p>
                      {member.linkedin && <a href={member.linkedin} target="_blank">
                        <svg className="mt-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M22.2283 0H1.77167C1.30179 0 0.851161 0.186657 0.518909 0.518909C0.186657 0.851161 0 1.30179 0 1.77167V22.2283C0 22.6982 0.186657 23.1488 0.518909 23.4811C0.851161 23.8133 1.30179 24 1.77167 24H22.2283C22.6982 24 23.1488 23.8133 23.4811 23.4811C23.8133 23.1488 24 22.6982 24 22.2283V1.77167C24 1.30179 23.8133 0.851161 23.4811 0.518909C23.1488 0.186657 22.6982 0 22.2283 0ZM7.15333 20.445H3.545V8.98333H7.15333V20.445ZM5.34667 7.395C4.93736 7.3927 4.53792 7.2692 4.19873 7.04009C3.85955 6.81098 3.59584 6.48653 3.44088 6.10769C3.28591 5.72885 3.24665 5.31259 3.32803 4.91145C3.40941 4.51032 3.6078 4.14228 3.89816 3.85378C4.18851 3.56529 4.55782 3.36927 4.95947 3.29046C5.36112 3.21165 5.77711 3.25359 6.15495 3.41099C6.53279 3.56838 6.85554 3.83417 7.08247 4.17481C7.30939 4.51546 7.43032 4.91569 7.43 5.325C7.43386 5.59903 7.38251 5.87104 7.27901 6.1248C7.17551 6.37857 7.02198 6.6089 6.82757 6.80207C6.63316 6.99523 6.40185 7.14728 6.14742 7.24915C5.893 7.35102 5.62067 7.40062 5.34667 7.395ZM20.4533 20.455H16.8467V14.1933C16.8467 12.3467 16.0617 11.7767 15.0483 11.7767C13.9783 11.7767 12.9283 12.5833 12.9283 14.24V20.455H9.32V8.99167H12.79V10.58H12.8367C13.185 9.875 14.405 8.67 16.2667 8.67C18.28 8.67 20.455 9.865 20.455 13.365L20.4533 20.455Z" fill="#0A66C2"/>
                        </svg>
                       </a>
                      }
                    </div>
                  ))}
                </div>

                {/* Desktop: 4 columns per row with equal spacing */}
                <div className="hidden lg:block">
                  {(() => {
                    const rows: TeamMember[][] = [];
                    let currentIndex = 0;
                    
                    while (currentIndex < teamMembers.length) {
                      const itemsInRow = 4;
                      rows.push(teamMembers.slice(currentIndex, currentIndex + itemsInRow));
                      currentIndex += itemsInRow;
                    }
                    
                    return rows.map((row, rowIndex) => {
                      return (
                        <div 
                          key={rowIndex} 
                          className="grid grid-cols-4 gap-y-12 mb-12 max-w-5xl mx-auto"
                        >
                          {row.map((member) => (
                            <div key={member.id} className="flex flex-col items-center text-center">
                              {member.Image?.url && (
                                <div className="relative mb-4 overflow-hidden">
                                  <Image
                                    src={`https://console.eleveight.ai${member.Image.url}`}
                                    alt={member.Fullname}
                                    width={234}
                                    height={233}
                                  />
                                </div>
                              )}
                              <h3 className="text-lg font-bold mb-1">{member.Fullname}</h3>
                              <p className="text-sm text-gray-600">{member.Position}</p>
                              {member.linkedin && <a href={member.linkedin} target="_blank">
                                <svg className="mt-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                  <path d="M22.2283 0H1.77167C1.30179 0 0.851161 0.186657 0.518909 0.518909C0.186657 0.851161 0 1.30179 0 1.77167V22.2283C0 22.6982 0.186657 23.1488 0.518909 23.4811C0.851161 23.8133 1.30179 24 1.77167 24H22.2283C22.6982 24 23.1488 23.8133 23.4811 23.4811C23.8133 23.1488 24 22.6982 24 22.2283V1.77167C24 1.30179 23.8133 0.851161 23.4811 0.518909C23.1488 0.186657 22.6982 0 22.2283 0ZM7.15333 20.445H3.545V8.98333H7.15333V20.445ZM5.34667 7.395C4.93736 7.3927 4.53792 7.2692 4.19873 7.04009C3.85955 6.81098 3.59584 6.48653 3.44088 6.10769C3.28591 5.72885 3.24665 5.31259 3.32803 4.91145C3.40941 4.51032 3.6078 4.14228 3.89816 3.85378C4.18851 3.56529 4.55782 3.36927 4.95947 3.29046C5.36112 3.21165 5.77711 3.25359 6.15495 3.41099C6.53279 3.56838 6.85554 3.83417 7.08247 4.17481C7.30939 4.51546 7.43032 4.91569 7.43 5.325C7.43386 5.59903 7.38251 5.87104 7.27901 6.1248C7.17551 6.37857 7.02198 6.6089 6.82757 6.80207C6.63316 6.99523 6.40185 7.14728 6.14742 7.24915C5.893 7.35102 5.62067 7.40062 5.34667 7.395ZM20.4533 20.455H16.8467V14.1933C16.8467 12.3467 16.0617 11.7767 15.0483 11.7767C13.9783 11.7767 12.9283 12.5833 12.9283 14.24V20.455H9.32V8.99167H12.79V10.58H12.8367C13.185 9.875 14.405 8.67 16.2667 8.67C18.28 8.67 20.455 9.865 20.455 13.365L20.4533 20.455Z" fill="#0A66C2"/>
                                </svg>
                              </a>}
                            </div>
                          ))}
                        </div>
                      );
                    });
                  })()}
                </div>
              </>
            )}
          </div>
      </main>
    </div>
  );
}
