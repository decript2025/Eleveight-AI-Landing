'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReservationDialog } from 'lib/ReservationDialog';
import { useState, useEffect } from 'react';

export default function Header() {
  const pathname = usePathname() || '';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isActive = (href: string) => isMounted && pathname.startsWith(href);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed p-5 top-0 w-full z-[1000] bg-background text-foreground px-8 py-5`}>
        <nav className="flex justify-between items-center gap-10">
          <Link href="/">
            <Image
              className="w-[160px] h-auto md:w-[184px]"
              src="/logo.svg"
              alt="Eleveight AI"
              width={184}
              height={44}
              unoptimized
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Link>
          
          <div className="hidden md:flex w-full justify-between items-center gap-10">
            <span className="flex gap-8">
              <Link
                href="/company"
                className={`text-sm min-w-[75px] relative transition-colors duration-300 hover:font-bold after:content-[''] after:absolute after:h-[3px] after:rounded-full after:bg-foreground after:-bottom-[20px] after:left-0 after:transition-all after:duration-300 after:w-0 hover:after:w-full ${isActive('/company') ? 'font-bold after:w-full' : ''}`}
              >
                Company
              </Link>
              <Link
                href="/newsroom"
                className={`text-sm min-w-[80px] relative transition-colors duration-300 hover:font-bold after:content-[''] after:absolute after:h-[3px] after:rounded-full after:bg-foreground after:-bottom-[20px] after:left-0 after:transition-all after:duration-300 after:w-0 hover:after:w-full ${isActive('/newsroom') ? 'font-bold after:w-full' : ''}`}
              >
                Newsroom
              </Link>
              <Link
                href="/contacts"
                className={`text-sm min-w-[65px] relative transition-colors duration-300 hover:font-bold after:content-[''] after:absolute after:h-[3px] after:rounded-full after:bg-foreground after:-bottom-[20px] after:left-0 after:transition-all after:duration-300 after:w-0 hover:after:w-full ${isActive('/contacts') ? 'font-bold after:w-full' : ''}`}
              >
                Contacts
              </Link>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <ReservationDialog />
            </div>
            
            {/* Mobile Burger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[999] md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Panel */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-background z-[1001] transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Close Button */}
        <button
          onClick={closeMobileMenu}
          className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center"
          aria-label="Close menu"
        >
          <svg
            className="w-6 h-6 text-foreground"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="flex flex-col text-foreground p-8 pt-24">
          <Link
            href="/company"
            onClick={closeMobileMenu}
            className={`text-lg py-3 border-b border-foreground/10 transition-colors duration-300 hover:font-bold ${isActive('/company') ? 'font-bold' : ''}`}
          >
            Company
          </Link>
          <Link
            href="/newsroom"
            onClick={closeMobileMenu}
            className={`text-lg py-3 border-b border-foreground/10 transition-colors duration-300 hover:font-bold ${isActive('/newsroom') ? 'font-bold' : ''}`}
          >
            Newsroom
          </Link>
          <Link
            href="/contacts"
            onClick={closeMobileMenu}
            className={`text-lg py-3 border-b border-foreground/10 transition-colors duration-300 hover:font-bold ${isActive('/contacts') ? 'font-bold' : ''}`}
          >
            Contacts
          </Link>
        </div>
      </div>
    </>
  );
}