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
    <>mx-[64px] 2xl:mx-[96px] sm:mx-[32px]
      <header className={`fixed top-0 z-10 bg-[#050505d9] text-foreground py-[14px] [width:inherit] left-[32px] right-[32px] 2xl:right-[96px] 2xl:left-[96px] sm:right-[64px] sm:left-[64px] `}>
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
                <HoverCardContent className="w-80 bg-[#050505d9] rounded-br-[16px] rounded-bl-[16px]" align="start">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-base mb-3">Platform</h3>
                      <div className="space-y-2">
                        <Link 
                          href="/platform/infrastructure" 
                          className="block p-2 hover:bg-accent rounded-md transition-colors text-sm"
                        >
                          <div className="font-medium">Infrastructure</div>
                          <div className="text-xs text-muted-foreground">GPU computing resources</div>
                        </Link>
                        <Link 
                          href="/platform/ai-tools" 
                          className="block p-2 hover:bg-accent rounded-md transition-colors text-sm"
                        >
                          <div className="font-medium">AI Tools</div>
                          <div className="text-xs text-muted-foreground">Development tools and frameworks</div>
                        </Link>
                        {/* Add more platform links as needed */}
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <HoverCard openDelay={200} closeDelay={300} open={isProductsOpen}
                onOpenChange={setIsProductsOpen}>
                <HoverCardTrigger asChild>
                  <span className="flex items-center whitespace-nowrap gap-1 text-sm font-semibold hover:text-primary">
                    Products <ChevronDown isOpen={isProductsOpen} />
                  </span>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-[#050505d9] rounded-br-[16px] rounded-bl-[16px]" align="start">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-base mb-3">Products</h3>
                      <div className="space-y-2">
                        <Link 
                          href="/platform/infrastructure" 
                          className="block p-2 hover:bg-accent rounded-md transition-colors text-sm"
                        >
                          <div className="font-medium">Infrastructure</div>
                          <div className="text-xs text-muted-foreground">GPU computing resources</div>
                        </Link>
                        <Link 
                          href="/platform/ai-tools" 
                          className="block p-2 hover:bg-accent rounded-md transition-colors text-sm"
                        >
                          <div className="font-medium">AI Tools</div>
                          <div className="text-xs text-muted-foreground">Development tools and frameworks</div>
                        </Link>
                        {/* Add more products links as needed */}
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              <Link
                href="/pricing"
                className={`text-sm font-semibold hover:text-primary`}
              >
                Pricing
              </Link>
              <Link
                href="/store"
                className={`text-sm font-semibold hover:text-primary`}
              >
                Store
              </Link>
              <Link
                href="/developers"
                className={`text-sm font-semibold hover:text-primary`}
              >
                Developers
              </Link>
              <Link
                href="/resources"
                className={`text-sm font-semibold hover:text-primary`}
              >
                Resources
              </Link>
              <Link
                href="/company"
                className={`text-sm font-semibold hover:text-primary`}
              >
                Company
              </Link>
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
                  className="w-20 h-16 bg-[#050505d9] rounded-br-[16px] rounded-bl-[16px] p-4" 
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
          className="fixed inset-0 bg-black/50 z-[999] xl:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Panel */}
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