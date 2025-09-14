import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    investmentRange: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const subject = `Investor Inquiry from ${formData.name}`;
    const body = `
New Investor Inquiry:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Investment Range: ${formData.investmentRange || 'Not specified'}

Message:
${formData.message || 'No message provided'}

---
This inquiry was submitted through the Vectorium investor inquiry form.
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:anshuranjan.ranjan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      investmentRange: '',
      message: '',
    });
    
    alert('Thank you for your interest! Your email client will open to send the inquiry.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'info@vectorium.co',
      link: 'mailto:info@vectorium.co',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Lasnamäe 4B-26 11412, Tallinn, Estonia',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to be part of the crypto-energy revolution? Contact our team to discuss 
            investment opportunities and strategic partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold text-white mb-6">
                Investor Inquiry Form
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="investmentRange" className="block text-sm font-medium text-slate-300 mb-2">
                      Investment Range
                    </label>
                    <select
                      id="investmentRange"
                      name="investmentRange"
                      value={formData.investmentRange}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select Range</option>
                      <option value="$50K-$100K">$50K - $100K</option>
                      <option value="$100K-$500K">$100K - $500K</option>
                      <option value="$500K-$1M">$500K - $1M</option>
                      <option value="$1M+">$1M+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                    placeholder="Tell us about your interest in Vectorium and any specific questions you have..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <Send className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center space-x-3 text-slate-300 hover:text-amber-400 transition-colors duration-300 group"
                    >
                      <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-amber-500/20 transition-all duration-300">
                        <IconComponent size={18} />
                      </div>
                      <div>
                        <div className="text-sm text-slate-400">{info.title}</div>
                        <div className="font-medium">{info.content}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <a
                  href="mailto:anshuranjan.ranjan@gmail.com?subject=Partnership Inquiry"
                  className="flex items-center space-x-3 text-slate-300 hover:text-blue-400 transition-colors duration-300 group"
                >
                  <MessageCircle className="text-blue-400" size={18} />
                  <span>Partnership Inquiry</span>
                </a>
                <a
                  href="mailto:anshuranjan.ranjan@gmail.com?subject=Schedule Meeting"
                  className="flex items-center space-x-3 text-slate-300 hover:text-emerald-400 transition-colors duration-300 group"
                >
                  <Calendar className="text-emerald-400" size={18} />
                  <span>Schedule Meeting</span>
                </a>
              </div>
            </div>

            {/* Investment Notice */}
            <div className="bg-gradient-to-r from-amber-500/10 to-emerald-500/10 backdrop-blur-sm p-6 rounded-2xl border border-amber-500/20">
              <h4 className="text-lg font-semibold text-white mb-2">
                Investment Opportunity
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Join forward-thinking investors who are already backing the future of crypto-energy solutions. 
                Early investment opportunities available with attractive terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;