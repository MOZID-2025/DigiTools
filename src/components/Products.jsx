import React from "react";

const Products = () => {
  return (
    <section className="bg-white py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#111827] mb-4">
            Premium Digital Tools
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-8">
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>

          {/* Toggle Switch */}
          <div className="inline-flex bg-slate-50 p-1 rounded-full border border-slate-100">
            <button className="px-8 py-2 bg-[#8B2CF5] text-white rounded-full font-medium text-sm">
              Products
            </button>
            <button className="px-8 py-2 text-slate-500 rounded-full font-medium text-sm">
              Cart (2)
            </button>
          </div>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: AI Writing Pro */}
          <div className="relative bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <span className="absolute top-4 right-4 bg-orange-100 text-orange-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
              Best Seller
            </span>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 border-2 border-[#F2F2F2] p-2">
              <img
                className="w-full h-full object-contain"
                src="/src/assets/writing.png"
                alt="Writing icon"
              />
            </div>
            <h3 className="text-xl font-bold text-[#111827] mb-2">
              AI Writing Pro
            </h3>
            <p className="text-slate-500 text-sm mb-6">
              Generate high-quality content, blogs, and marketing copy in
              seconds with advanced AI.
            </p>
            <div className="text-2xl font-bold text-[#111827] mb-6">
              $29<span className="text-slate-400 text-sm font-normal">/Mo</span>
            </div>
            <ul className="space-y-3 mb-8 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Unlimited AI
                generations
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> 50+ writing templates
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Grammar checker
              </li>
            </ul>
            <button className="w-full py-3 bg-[#8B2CF5] text-white font-bold rounded-2xl hover:bg-[#7a24db] transition-colors">
              Buy Now
            </button>
          </div>

          {/* Card 2: Design Templates Pack */}
          <div className="relative bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <span className="absolute top-4 right-4 bg-blue-100 text-blue-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
              Popular
            </span>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 border-2 border-[#F2F2F2] p-2">
              <img
                className="w-full h-full object-contain"
                src="/src/assets/design-tool.png"
                alt="Writing icon"
              />
            </div>
            <h3 className="text-xl font-bold text-[#111827] mb-2">
              Design Templates Pack
            </h3>
            <p className="text-slate-500 text-sm mb-6">
              2000+ premium templates for social media, presentations, and
              marketing materials.
            </p>
            <div className="text-2xl font-bold text-[#111827] mb-6">
              $49
              <span className="text-slate-400 text-sm font-normal">
                /One-Time
              </span>
            </div>
            <ul className="space-y-3 mb-8 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> 2000+ templates
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Monthly updates
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Commercial license
              </li>
            </ul>
            <button className="w-full py-3 bg-[#8B2CF5] text-white font-bold rounded-2xl hover:bg-[#7a24db] transition-colors">
              Buy Now
            </button>
          </div>

          {/* Card 3: Premium Stock Assets */}
          <div className="relative bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <span className="absolute top-4 right-4 bg-green-100 text-green-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
              New
            </span>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 border-2 border-[#F2F2F2] p-2">
              <img
                className="w-full h-full object-contain"
                src="/src/assets/Group.png"
                alt="Writing icon"
              />
            </div>
            <h3 className="text-xl font-bold text-[#111827] mb-2">
              Premium Stock Assets
            </h3>
            <p className="text-slate-500 text-sm mb-6">
              Access millions of royalty-free photos, videos, and graphics for
              your projects.
            </p>
            <div className="text-2xl font-bold text-[#111827] mb-6">
              $19<span className="text-slate-400 text-sm font-normal">/Mo</span>
            </div>
            <ul className="space-y-3 mb-8 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> 10M+ assets
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Commercial use
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> No attribution
              </li>
            </ul>
            <button className="w-full py-3 bg-[#8B2CF5] text-white font-bold rounded-2xl hover:bg-[#7a24db] transition-colors">
              Buy Now
            </button>
          </div>

          {/* Card 4: Automation Toolkit */}
          <div className="relative bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <span className="absolute top-4 right-4 bg-blue-100 text-blue-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
              Popular
            </span>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 border-2 border-[#F2F2F2] p-2">
              <img
                className="w-full h-full object-contain"
                src="/src/assets/operation.png"
                alt="Writing icon"
              />
            </div>
            <h3 className="text-xl font-bold text-[#111827] mb-2">
              Automation Toolkit
            </h3>
            <p className="text-slate-500 text-sm mb-6">
              Automate repetitive tasks and streamline your workflow with
              powerful tools.
            </p>
            <div className="text-2xl font-bold text-[#111827] mb-6">
              $79<span className="text-slate-400 text-sm font-normal">/Mo</span>
            </div>
            <ul className="space-y-3 mb-8 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> 50+ automations
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> API access
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Custom workflows
              </li>
            </ul>
            <button className="w-full py-3 bg-[#8B2CF5] text-white font-bold rounded-2xl hover:bg-[#7a24db] transition-colors">
              Buy Now
            </button>
          </div>

          {/* Card 5: Resume Builder Pro */}
          <div className="relative bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <span className="absolute top-4 right-4 bg-green-100 text-green-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
              New
            </span>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 border-2 border-[#F2F2F2] p-2">
              <img
                className="w-full h-full object-contain"
                src="/src/assets/portfolio.png"
                alt="Writing icon"
              />
            </div>
            <h3 className="text-xl font-bold text-[#111827] mb-2">
              Resume Builder Pro
            </h3>
            <p className="text-slate-500 text-sm mb-6">
              Create professional resumes and cover letters that land
              interviews.
            </p>
            <div className="text-2xl font-bold text-[#111827] mb-6">
              $15
              <span className="text-slate-400 text-sm font-normal">
                /One-Time
              </span>
            </div>
            <ul className="space-y-3 mb-8 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> 100+ templates
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> ATS optimization
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Export to PDF
              </li>
            </ul>
            <button className="w-full py-3 bg-[#8B2CF5] text-white font-bold rounded-2xl hover:bg-[#7a24db] transition-colors">
              Buy Now
            </button>
          </div>

          {/* Card 6: Social Media Content Kit */}
          <div className="relative bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <span className="absolute top-4 right-4 bg-orange-100 text-orange-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
              Best Seller
            </span>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 border-2 border-[#F2F2F2] p-2">
              <img
                className="w-full h-full object-contain"
                src="/src/assets/social-media.png"
                alt="Writing icon"
              />
            </div>
            <h3 className="text-xl font-bold text-[#111827] mb-2">
              Social Media Content Kit
            </h3>
            <p className="text-slate-500 text-sm mb-6">
              Complete toolkit for creating engaging social media content across
              all platforms.
            </p>
            <div className="text-2xl font-bold text-[#111827] mb-6">
              $39<span className="text-slate-400 text-sm font-normal">/Mo</span>
            </div>
            <ul className="space-y-3 mb-8 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> 5000+ assets
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Scheduler included
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Analytics dashboard
              </li>
            </ul>
            <button className="w-full py-3 bg-[#8B2CF5] text-white font-bold rounded-2xl hover:bg-[#7a24db] transition-colors">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
