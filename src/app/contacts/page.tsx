export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <main className="pt-24">
        <div className="container mx-auto px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
              Contact Eleveight AI
            </h1>

            <p className="text-xl mb-12 text-center text-gray-600">
            Connect with our offices in Gagarin and Yerevan. Reach us for partnerships, support, and AI collaboration.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Data Center - Gagarin */}
                            <div className="flex flex-col">
                <h2 className="text-2xl font-semibold mb-4 text-center">Data Center</h2>
                <div className="text-center mb-6">
                  <p className="text-gray-700">Gortsaranayin Street 1, Gagarin, Armenia</p>
                </div>
                <div className="bg-gray-100 rounded-lg overflow-hidden mb-3 flex-grow">
                  <div className="w-full overflow-hidden h-[300px]">
                    <iframe 
                      className="w-full h-[450px] mt-[-150px]" 
                      frameBorder="0" 
                      scrolling="no" 
                      marginHeight={0} 
                      marginWidth={0}
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3033.5!2d44.872133!3d40.54279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDMyJzM0LjAiTiA0NMKwNTInMTkuNyJF!5e0!3m2!1sen!2s!4v1234567890"
                      title="Eleveight Data Center - Gortsaranayin Street 1, Gagarin, Armenia"
                    />
                  </div>
                </div>
              </div>
              
              {/* Head Office - Yerevan */}
              <div className="flex flex-col">
                <h2 className="text-2xl font-semibold mb-4 text-center">Head Office</h2>
                <div className="text-center mb-6">
                  <p className="text-gray-700">1/31 Azatutyan ave., Yerevan, 0037, Armenia</p>
                </div>
                <div className="bg-gray-100 rounded-lg overflow-hidden mb-3 flex-grow">
                  <iframe 
                      className="w-full h-[450px] mt-[-150px]" 
                      frameBorder="0" 
                      scrolling="no" 
                      marginHeight={0} 
                      marginWidth={0}
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1320.407281589575!2d44.51716771693004!3d40.1965890638223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abda199fde3b5%3A0x4d54f0526e57e756!2s1%2C%2031%20Azatutyan%20Ave%2C%20Yerevan%2C%20Armenia!5e0!3m2!1sen!2sus!4v1759997631721!5m2!1sen!2sus"
                      title="Eleveight Data Center - Gortsaranayin Street 1, Gagarin, Armenia"
                    />
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700">
                Get in touch with our team by emailing us at{' '}
                <a href="mailto:info@eleveight.ai" className="text-black font-semibold underline hover:text-gray-700">
                  info@eleveight.ai
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

