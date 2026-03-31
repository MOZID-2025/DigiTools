import React from "react";

const PriceSection = () => {
  return (
    <div className="w-full bg-[#fcfdff] py-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827]">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-500 text-lg">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Starter Plan */}
          <div className="bg-[#F9FAFC] p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col h-full">
            <h3 className="text-2xl font-bold text-[#111827]">Starter</h3>
            <p className="text-slate-400 mt-2 mb-6 text-sm">
              Perfect for getting started
            </p>
            <div className="flex items-baseline mb-8">
              <span className="text-5xl font-bold text-[#111827]">$0</span>
              <span className="text-slate-400 ml-1">/Month</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-slate-500 text-sm">
                <span className="text-green-500 text-lg">✓</span> Access to 10
                free tools
              </li>
              <li className="flex items-center gap-3 text-slate-500 text-sm">
                <span className="text-green-500 text-lg">✓</span> Basic
                templates
              </li>
              <li className="flex items-center gap-3 text-slate-500 text-sm">
                <span className="text-green-500 text-lg">✓</span> Community
                support
              </li>
              <li className="flex items-center gap-3 text-slate-500 text-sm">
                <span className="text-green-500 text-lg">✓</span> 1 project per
                month
              </li>
            </ul>
            <button className="w-full py-4 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#9333EA] text-white font-bold hover:bg-[#6D28D9] transition shadow-lg shadow-purple-100">
              Get Started Free
            </button>
          </div>

          {/* Pro Plan (Highlighted) */}
          <div className="relative bg-gradient-to-r from-[#7C3AED] to-[#9333EA] p-8 rounded-[32px] shadow-2xl flex flex-col h-full scale-105 z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF9C3] text-[#A16207] text-[10px] font-bold px-4 py-1.5 rounded-full shadow-md uppercase tracking-wider">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold text-white">Pro</h3>
            <p className="text-white/80 mt-2 mb-6 text-sm">
              Best for professionals
            </p>
            <div className="flex items-baseline mb-8">
              <span className="text-5xl font-bold text-white">$29</span>
              <span className="text-white/80 ml-1">/Month</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-white text-sm">
                <span className="text-white text-lg">✓</span> Access to all
                premium tools
              </li>
              <li className="flex items-center gap-3 text-white text-sm">
                <span className="text-white text-lg">✓</span> Unlimited
                templates
              </li>
              <li className="flex items-center gap-3 text-white text-sm">
                <span className="text-white text-lg">✓</span> Priority support
              </li>
              <li className="flex items-center gap-3 text-white text-sm">
                <span className="text-white text-lg">✓</span> Unlimited projects
              </li>
              <li className="flex items-center gap-3 text-white text-sm">
                <span className="text-white text-lg">✓</span> Cloud sync
              </li>
            </ul>
            <button className="w-full py-4 rounded-full bg-white text-[#7C3AED] font-bold hover:bg-slate-50 transition shadow-xl">
              Start Pro Trial
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-[#F9FAFC] p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col h-full">
            <h3 className="text-2xl font-bold text-[#111827]">Enterprise</h3>
            <p className="text-slate-400 mt-2 mb-6 text-sm">
              For teams and businesses
            </p>
            <div className="flex items-baseline mb-8">
              <span className="text-5xl font-bold text-[#111827]">$99</span>
              <span className="text-slate-400 ml-1">/Month</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-slate-500 text-sm">
                <span className="text-green-500 text-lg">✓</span> Everything in
                Pro
              </li>
              <li className="flex items-center gap-3 text-slate-500 text-sm">
                <span className="text-green-500 text-lg">✓</span> Team
                collaboration
              </li>
              <li className="flex items-center gap-3 text-slate-500 text-sm">
                <span className="text-green-500 text-lg">✓</span> Custom
                integrations
              </li>
              <li className="flex items-center gap-3 text-slate-500 text-sm">
                <span className="text-green-500 text-lg">✓</span> Dedicated
                support
              </li>
            </ul>
            <button className="w-full py-4 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#9333EA] text-white font-bold hover:bg-[#6D28D9] transition shadow-lg shadow-purple-100">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
