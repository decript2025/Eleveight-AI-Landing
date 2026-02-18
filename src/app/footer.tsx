import Link from "next/link";
import Image from "next/image";
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

  const currYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background text-foreground py-12">
      {/* Main Footer Content */}
      <div className="grid grid-cols-[auto_1fr_auto] gap-12">
        {/* Logo and Social Section */}
        <div className=" flex flex-col items-start gap-3">
          <Image src="/logo.svg" alt="Eleveight" width={153} height={36} />
          <div className="flex gap-3 p-4 self-center">
            <Link 
              href="https://www.linkedin.com/company/eleveight/" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF6B35] transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </Link>
            <Link 
              href="https://twitter.com/eleveight" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF6B35] transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Link>
          </div>
        </div>

        <div className=" grid grid-cols-4 gap-8">
              {/* Footer Sections */}
              {footerSections.map((section, index) => (
                <div key={index} className="lg:col-span-1">
                  <h5 className="text-h5 text-foreground">
                    {section.title}
                  </h5>
                  <ul>
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
        </div>

        {/* Request Demo Button Section */}
        <div className="flex flex-col items-end gap-6">
          <Button variant="default" size="lg">
            Request demo
          </Button>

          <div className="flex flex-col items-end gap-1">
            <Link href="#top" className="text-sm text-[#F5F5F5BF] hover:text-white transition-colors">
                ↑ On top
            </Link>
            <div className="text-sm text-[#F5F5F5BF]">
              © {currYear}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}