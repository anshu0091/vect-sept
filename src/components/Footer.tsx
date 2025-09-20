import React from 'react';
import { Linkedin, Twitter, Mail, Github, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { label: 'About Us', href: '#vision' },
      { label: 'Technology', href: '#technology' },
      { label: 'AI Asset Manager', href: '#ai-asset-manager' },
      { label: 'Roadmap', href: '#roadmap' },
    ],
    investors: [
      { label: 'Investment Opportunity', href: '#market' },
      { label: 'Executive Structure', href: '#executive-structure' },
      { label: 'Contact', href: '#contact' },
      { label: 'Whitepaper', href: '#' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Risk Disclosure', href: '#' },
      { label: 'Compliance', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: 'mailto:info@vectorium.ai', label: 'Email' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/logo copy.jpg" 
                  alt="Vectorium - Leading crypto energy solutions company" 
                  className="h-12 w-12 rounded-full border-2 border-amber-400"
                  width="48"
                  height="48"
                  loading="lazy"
                />
                <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-blue-400 bg-clip-text text-transparent">
                  VECTORIUM
                </div>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Pioneering the future of crypto-energy solutions through innovative blockchain 
                technology and sustainable energy practices.
              </p>
              <div className="text-amber-400 font-medium text-sm">
                In CryptoEnergy We Trust
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-white font-semibold mb-4">Company</h3>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-slate-400 hover:text-amber-400 transition-colors duration-300"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-4">Investors</h3>
                  <ul className="space-y-3">
                    {footerLinks.investors.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-slate-400 hover:text-amber-400 transition-colors duration-300"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-4">Legal</h3>
                  <ul className="space-y-3">
                    {footerLinks.legal.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-slate-400 hover:text-amber-400 transition-colors duration-300"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Newsletter & Social */}
            <div className="lg:col-span-1">
              <h3 className="text-white font-semibold mb-4">Stay Connected</h3>
              <p className="text-slate-400 mb-4 text-sm">
                Get updates on our latest developments and investment opportunities.
              </p>
              
              <div className="flex space-x-3 mb-6">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-500/20 transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <IconComponent 
                        size={18} 
                        className="text-slate-400 group-hover:text-amber-400 transition-colors duration-300" 
                      />
                    </a>
                  );
                })}
              </div>

              {/* Scroll to Top Button */}
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-slate-400 hover:text-amber-400 transition-colors duration-300 group"
              >
                <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
                <span className="text-sm">Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2024 Vectorium. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <span>Built for investors and innovators</span>
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <span>Secure • Transparent • Sustainable</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;