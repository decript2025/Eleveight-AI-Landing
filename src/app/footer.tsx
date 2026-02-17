'use client';

import Link from 'next/link';
import { Linkedin,  } from 'lucide-react';
import { ReservationDialog } from 'lib/ReservationDialog';

export default function Footer() {
  return (
    <footer className="w-full h-[258px] md:h-[200px] bg-[#1E1D21] flex-shrink-0 relative text-white">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="flex flex-col items-center gap-8">
          <div className="md:hidden pt-5">
            <ReservationDialog />
          </div>
          <Link 
            href="/faq" 
            className="text-xl font-bold hover:opacity-80 transition-opacity duration-200"
          >
            FAQ
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                window.open('https://www.linkedin.com/company/eleveight-ai/posts/?feedView=all', '_blank', 'width=600,height=600');
              }}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0A66C2] text-white hover:bg-[#004182] transition-colors"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => {
                window.open('https://x.com/eleveightai?s=21&t=KfBPK1aZFAjeOweS1Tfefw', '_blank', 'width=600,height=600');
              }}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
              aria-label="Share on X"
            >
              <svg 
                className="w-5 h-5" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </button>
          </div>

          <p className="text-sm text-white pb-2">
            Eleveight AI. 2025 All rights reserved ©
          </p>
        </div>
      </div>
    </footer>
  );
}