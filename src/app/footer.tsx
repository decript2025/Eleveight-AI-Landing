'use client';

import Link from "next/link";
import { Button } from "ui/components/ui/button";

export default function Footer() {
  const footerSections = [
    {
      title: "Products",
      links: [
        { label: "Pure metal", href: "#" },
        { label: "Growth fabric", href: "#" },
        { label: "Private compute", href: "#" },
        { label: "Model marketplace", href: "#" },
      ]
    },
    {
      title: "Platform",
      links: [
        { label: "Platform Overview", href: "#" },
        { label: "Security and Compliance", href: "#" },
        { label: "Regions and sustainability", href: "#" },
        { label: "Service status", href: "#" },
        { label: "Eleveight store", href: "#" },
      ]
    },
    {
      title: "Pricing",
      links: [
        { label: "Pricing", href: "#" },
        { label: "Billing and invoicing", href: "#" },
        { label: "Enterprise plans", href: "#" },
      ]
    },
    {
      title: "Legal and support",
      links: [
        { label: "Privacy policy", href: "#" },
        { label: "Terms of services", href: "#" },
        { label: "Acceptable use policy", href: "#" },
        { label: "Security and compliance", href: "#" },
        { label: "Cookie policy", href: "#" },
      ]
    }
  ];

  return (
    <footer className="w-full bg-black text-white py-12 border-t border-gray-800">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Logo and Social Section */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-4">
              Eleveight<sup className="text-sm">AI</sup>
            </h2>
            <div className="flex gap-3">
              <Link 
                href="https://www.linkedin.com/company/eleveight/" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF6B35] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Link>
              <Link 
                href="https://twitter.com/eleveight" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF6B35] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="font-semibold text-white mb-3">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Request Demo Button Section */}
          <div className="lg:col-span-1 flex flex-col items-start lg:items-end">
            <Button variant="default" size="lg">
              Request demo
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 text-sm text-gray-400">
          <div className="mb-4 md:mb-0">
            <Link href="#" className="hover:text-white transition-colors">
              ↑ On top
            </Link>
          </div>
          <div>
            © 2026
          </div>
        </div>
      </div>
    </footer>
  );
}