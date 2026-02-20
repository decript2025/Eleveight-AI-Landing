'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from 'ui/components/ui/hover-card';
import { Button } from 'ui/components/ui/button';
import { ChevronDown } from 'ui/lib/chevronDown';
import { GetStarted } from './home/get-started';
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

  const [isPlatformOpen, setIsPlatformOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobilePlatformOpen, setIsMobilePlatformOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const [selectedLang, setSelectedLang] = useState<'eng' | 'arm'>('eng');
  const languages = {
    eng: { code: 'eng', display: 'ENG' },
    arm: { code: 'arm', display: 'Հայ' }
  };
  const otherLang = selectedLang === 'eng' ? languages.arm : languages.eng;

  return (
    <>
      <header className={`fixed top-0 z-10 bg-background/90 text-foreground py-[14px] [width:inherit] left-[32px] right-[32px] 2xl:right-[96px] 2xl:left-[96px] sm:right-[64px] sm:left-[64px] `}>
        <nav className="flex justify-between items-center gap-[16px]">
          <Link href="/">
            <Image
              className='min-w-[153px]'
              src="/logo.svg"
              alt="Eleveight AI"
              width={0}
              height={0}
            />
          </Link>
          
          <div className="hidden xl:flex w-full justify-between items-center gap-10">
            <span className="flex gap-6">
              <HoverCard openDelay={200} closeDelay={300} open={isPlatformOpen}
                onOpenChange={setIsPlatformOpen}>
                <HoverCardTrigger asChild>
                  <span className="flex items-center whitespace-nowrap gap-1 text-sm font-semibold hover:text-primary">
                    Platform <ChevronDown isOpen={isPlatformOpen} />
                  </span>
                </HoverCardTrigger>
                <HoverCardContent className="w-64 bg-background/90 rounded-b-[16px] p-2 overflow-hidden" align="start" sideOffset={15}>
                  {[
                    { href: '/platform/overview', label: 'Platform Overview' },
                    { href: '/platform/security', label: 'Security and Compliance' },
                    { href: '/platform/regions', label: 'Regions and sustainability' },
                    { href: '/platform/status', label: 'Service status' },
                    { href: '/store', label: 'Eleveight store' },
                  ].map((item, i, arr) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-6 py-4 text-sm hover:text-primary transition-colors ${i < arr.length - 1 ? 'border-b border-foreground/80' : ''}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </HoverCardContent>
              </HoverCard>

              <HoverCard openDelay={200} closeDelay={300} open={isProductsOpen}
                onOpenChange={setIsProductsOpen}>
                <HoverCardTrigger asChild>
                  <span className="flex items-center whitespace-nowrap gap-1 text-sm font-semibold hover:text-primary">
                    Products <ChevronDown isOpen={isProductsOpen} />
                  </span>
                </HoverCardTrigger>
                <HoverCardContent className="w-[760px] bg-background/90 rounded-b-[16px] p-2 overflow-hidden" align="start" sideOffset={15}>
                  <div className="grid grid-cols-4 divide-x divide-foreground/10">
                    {[
                      { href: '/products/pure-metal', label: 'Pure Metal', icon: '■', desc: 'Dedicated next-gen servers with no noisy neighbors' },
                      { href: '/products/growth-fabric', label: 'Growth Fabric', icon: '◆', desc: 'AI Cloud for training and inference with clear instance classes' },
                      { href: '/products/private-compute', label: 'Private Compute', icon: '●', desc: 'Physically isolated racks or dedicated machine halls' },
                      { href: '/products/model-marketplace', label: 'Model Marketplace', icon: '▲', desc: 'Instant launch and evaluation inside our environment' },
                    ].map((item) => (
                      <>
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex flex-col gap-4 px-4 py-5 text-sm transition-colors group"
                      >
                        <span className="flex items-center gap-2 font-semibold text-foreground/90 hover:text-primary">
                          <span className="text-sm">{item.icon}</span>
                          <h5 className="text-sm whitespace-nowrap">{item.label}</h5>
                        </span>
                        <span className="text-sm text-foreground/80 cursor-default">{item.desc}</span>
                      </Link>
                      </>
                    ))}
                  </div>
                </HoverCardContent>
              </HoverCard>

              {/* Simple nav links */}
              {[
                { href: '/pricing', label: 'Pricing' },
                { href: '/developers', label: 'Developers' },
                { href: '/resources', label: 'Resources' },
                { href: '/company', label: 'Company' },
              ].map((item) => 
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-semibold hover:text-primary ${isActive(item.href) ? 'text-primary' : ''}`}
                >
                  {item.label}
                </Link>
              )}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden xl:flex items-center justify-between gap-4">
              <HoverCard openDelay={200} closeDelay={300} open={isLangOpen} onOpenChange={setIsLangOpen}>
                <HoverCardTrigger asChild>
                  <button className="text-sm font-semibold hover:text-primary flex items-center">
                    {languages[selectedLang].display}
                    <ChevronDown isOpen={isLangOpen} />
                  </button>
                </HoverCardTrigger>
                <HoverCardContent 
                  className="w-20 h-16 bg-background/90 rounded-br-[16px] rounded-bl-[16px] p-4" 
                  align="center"
                  sideOffset={15}
                >
                  <button
                    onClick={() => {
                      setSelectedLang(otherLang.code as 'eng' | 'arm');
                      setIsLangOpen(false);
                    }}
                    className="w-full text-left p-2 hover:text-primary rounded-md text-sm font-semibold"
                  >
                    {otherLang.display}
                  </button>
                </HoverCardContent>
              </HoverCard>
              <Link
                href="/login"
                className={`text-sm font-semibold hover:text-primary whitespace-nowrap`}
              >
                Log in
              </Link>
              <GetStarted />
            </div>
            
            {/* Mobile Burger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="xl:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
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
      {isMobileMenuOpen &&(
        <div 
          className="fixed inset-0 bg-background/90 z-[999] xl:hidden"
          onClick={closeMobileMenu}
        />
      )}

      <div className={`fixed top-0 right-0 h-full w-72 bg-[#111111] z-[1001] transform transition-transform duration-300 ease-in-out xl:hidden overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Close Button */}
        <button
          onClick={closeMobileMenu}
          className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center"
          aria-label="Close menu"
        >
          <svg
            className="w-5 h-5 text-primary"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col text-foreground pt-20 pb-8">
          {/* Platform accordion */}
          <div>
            <button
              onClick={() => setIsMobilePlatformOpen(!isMobilePlatformOpen)}
              className="w-full flex items-center justify-between px-8 py-4 text-sm font-semibold text-foreground hover:text-primary"
            >
              <span>Platform</span>
              <ChevronDown isOpen={isMobilePlatformOpen} />
            </button>
            <div className="mx-8 border-b border-foreground/10" />
            {isMobilePlatformOpen && (
              <div className="flex flex-col mt-1">
                {[
                  { href: '/platform/overview', label: 'Platform Overview' },
                  { href: '/platform/security', label: 'Security and Compliance' },
                  { href: '/platform/regions', label: 'Regions and sustainability' },
                  { href: '/platform/status', label: 'Service status' },
                  { href: '/store', label: 'Eleveight store' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="px-8 py-3 text-sm text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mx-8 mt-1 border-b border-foreground/10" />
              </div>
            )}
          </div>

          {/* Products accordion */}
          <div>
            <button
              onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
              className="w-full flex items-center justify-between px-8 py-4 text-sm font-semibold text-foreground hover:text-primary"
            >
              <span>Products</span>
              <ChevronDown isOpen={isMobileProductsOpen} />
            </button>
            <div className="mx-8 border-b border-foreground/10" />
            {isMobileProductsOpen && (
              <div className="flex flex-col mt-1">
                {[
                  { href: '/products/pure-metal', label: 'Pure Metal', icon: '■' },
                  { href: '/products/growth-fabric', label: 'Growth Fabric', icon: '◆' },
                  { href: '/products/private-compute', label: 'Private Compute', icon: '●' },
                  { href: '/products/model-marketplace', label: 'Model Marketplace', icon: '▲' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="px-8 py-3 text-sm text-foreground/80 hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <span className="text-xs text-foreground/50">{item.icon}</span>
                    {item.label}
                  </Link>
                ))}
                <div className="mx-8 mt-1 border-b border-foreground/10" />
              </div>
            )}
          </div>

          {/* Simple nav links */}
          {[
            { href: '/pricing', label: 'Pricing' },
            { href: '/developers', label: 'Developers' },
            { href: '/resources', label: 'Resources' },
            { href: '/company', label: 'Company' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMobileMenu}
              className={`px-8 py-4 text-sm font-semibold hover:text-primary transition-colors ${isActive(item.href) ? 'text-primary' : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
                href="/login"
                onClick={closeMobileMenu}
                className={`px-8 py-4 text-sm font-semibold hover:text-primary transition-colors}`}              >
                Log in
              </Link>

              <div className="flex justify-around mt-1">
              {(['eng', 'arm'] as const).map((lang) => (
                <Button
                  variant="link"
                  key={lang}
                  disabled={selectedLang === lang}
                  onClick={() => setSelectedLang(lang)}
                  className={` ${ selectedLang === lang && 'text-foreground/30 cursor-default' }`}
                >
                  {languages[lang].display}
                </Button>
              ))}
            </div>
        </div>
      </div>
    </>
  );
}