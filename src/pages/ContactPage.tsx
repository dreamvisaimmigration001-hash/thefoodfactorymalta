import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY_CONTACT } from '../data/factoryData';
import { BrandLogo } from '../components/BrandLogo';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: 'Food Manufacturing',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const interests = [
    'Food Manufacturing',
    'Private Label',
    'Healthcare Catering',
    'Outside Catering & Banqueting',
    'Culinary R&D',
    'Bakery & Pastry Supply',
    'Maritime & Export Distribution',
    'Other Partnership',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields (Name, Email, Message).');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#FBF9F5] text-[#1A1A1A] pt-24 pb-24">
      {/* Hero */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16 md:mb-20">
        <div className="border-b border-black/8 pb-10">
          <span className="text-xs font-mono text-[#C13B2B] uppercase font-bold tracking-widest block mb-2">
            DIRECT COMMERCIAL INQUIRIES
          </span>
          <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#111111] uppercase leading-[0.9]">
            LET'S CREATE<br />
            <span className="text-[#C13B2B]">SOMETHING GREAT.</span>
          </h1>
          <p className="font-editorial italic text-2xl md:text-3xl text-[#444444] mt-4 max-w-3xl leading-snug">
            Whether scaling a private-label retail SKU, tendering institutional healthcare catering, or sourcing export volume, our team is ready to assist.
          </p>
        </div>
      </section>

      {/* Main Grid: Form on Left, Direct Channels on Right */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form (Cols 1-7) */}
          <div className="lg:col-span-7 bg-white border border-black/8 rounded-3xl p-8 sm:p-12 shadow-lg">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#C13B2B]/10 border border-[#C13B2B] flex items-center justify-center mx-auto text-[#C13B2B] text-2xl font-bold">
                  ✓
                </div>
                <h3 className="font-display font-bold text-3xl text-[#111111] uppercase">
                  INQUIRY TRANSMITTED
                </h3>
                <p className="font-editorial italic text-lg text-[#555555] max-w-md mx-auto">
                  Thank you, {formData.name}. Our commercial development team will review your specifications and contact you shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        interest: 'Food Manufacturing',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 bg-[#F4EFE6] hover:bg-[#EAE3D5] text-[#111111] font-display text-xs font-bold uppercase tracking-wider rounded-lg transition-colors"
                  >
                    SEND ANOTHER INQUIRY
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="font-display font-bold text-2xl text-[#111111] uppercase">
                    COMMERCIAL INQUIRY FORM
                  </h2>
                  <p className="text-xs text-[#666666] mt-1">
                    Direct communication with our Bulebel procurement and culinary teams.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 text-xs text-red-700 rounded-lg">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#555555] uppercase mb-2 font-bold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Elena Vella"
                      className="w-full bg-[#FBF9F5] border border-black/10 focus:border-[#C13B2B] focus:bg-white focus:outline-none px-4 py-3 rounded-xl text-sm text-[#111111] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#555555] uppercase mb-2 font-bold">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Mediterranean Food Group"
                      className="w-full bg-[#FBF9F5] border border-black/10 focus:border-[#C13B2B] focus:bg-white focus:outline-none px-4 py-3 rounded-xl text-sm text-[#111111] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#555555] uppercase mb-2 font-bold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="elena@company.com"
                      className="w-full bg-[#FBF9F5] border border-black/10 focus:border-[#C13B2B] focus:bg-white focus:outline-none px-4 py-3 rounded-xl text-sm text-[#111111] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#555555] uppercase mb-2 font-bold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+356 2100 0000"
                      className="w-full bg-[#FBF9F5] border border-black/10 focus:border-[#C13B2B] focus:bg-white focus:outline-none px-4 py-3 rounded-xl text-sm text-[#111111] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#555555] uppercase mb-2 font-bold">
                    What are you interested in?
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-[#FBF9F5] border border-black/10 focus:border-[#C13B2B] focus:bg-white focus:outline-none px-4 py-3 rounded-xl text-sm text-[#111111] transition-all"
                  >
                    {interests.map((it) => (
                      <option key={it} value={it}>
                        {it}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#555555] uppercase mb-2 font-bold">
                    Project Scope / Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your anticipated volume, product categories, dietary specifications, or logistical requirements..."
                    className="w-full bg-[#FBF9F5] border border-black/10 focus:border-[#C13B2B] focus:bg-white focus:outline-none px-4 py-3 rounded-xl text-sm text-[#111111] transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#C13B2B] hover:bg-[#A02B1D] text-white font-display text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all"
                >
                  SEND INQUIRY
                </button>
              </form>
            )}
          </div>

          {/* Right Details & Bulebel Location (Cols 8-12) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-white rounded-3xl border border-black/8 shadow-sm space-y-6">
              <span className="text-xs font-mono text-[#C13B2B] uppercase font-bold tracking-widest block">
                HEADQUARTERS & MANUFACTURING
              </span>

              <h3 className="font-display font-bold text-2xl text-[#111111] uppercase">
                BULEBEL PRODUCTION COMPLEX
              </h3>

              <div className="space-y-4 text-xs font-sans-ui text-[#555555]">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C13B2B] mt-1 shrink-0" />
                  <div>
                    <p className="font-bold text-[#111111] uppercase">LOCATION</p>
                    <p>{COMPANY_CONTACT.addressLine1}</p>
                    <p>{COMPANY_CONTACT.addressLine2}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#556048] mt-1 shrink-0" />
                  <div>
                    <p className="font-bold text-[#111111] uppercase">TELEPHONE</p>
                    <a href="tel:+35625676500" className="hover:text-[#C13B2B] transition-colors font-mono font-bold text-[#111111]">
                      {COMPANY_CONTACT.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C13B2B] mt-1 shrink-0" />
                  <div>
                    <p className="font-bold text-[#111111] uppercase">EMAIL INQUIRIES</p>
                    <a href="mailto:info@thefoodfactory.com.mt" className="hover:text-[#C13B2B] transition-colors font-mono font-bold text-[#111111]">
                      {COMPANY_CONTACT.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#888888] mt-1 shrink-0" />
                  <div>
                    <p className="font-bold text-[#111111] uppercase">OFFICIAL BUSINESS HOURS</p>
                    <p>Monday — Friday: 08:00 – 17:30 CET</p>
                    <p className="text-[10px] text-[#888888]">Continuous 24/7 Processing Operation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Location Card */}
            <div className="p-8 bg-[#F4EFE6] rounded-3xl border border-black/8 space-y-3">
              <span className="font-mono text-xs text-[#C13B2B] font-bold uppercase block">
                STRATEGIC MEDITERRANEAN HUB
              </span>
              <h4 className="font-display font-bold text-xl text-[#111111] uppercase">
                EXPORT & LOGISTICS PROXIMITY
              </h4>
              <p className="text-xs text-[#555555] leading-relaxed">
                Located within 15 minutes of Malta International Airport and 10 minutes of the Grand Harbour deep-water port, providing rapid roll-on/roll-off refrigerated container transit to Europe and North Africa.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
