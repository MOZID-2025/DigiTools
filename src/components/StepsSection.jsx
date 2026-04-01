import React from "react";

const StepsSection = () => {
  return (
    <div className="w-full bg-[#fcfdff] py-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-extrabold text-[#111827] mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-slate-500 text-lg">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="relative bg-[#FAFAFA] border border-slate-100 rounded-[20px] p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <span className="absolute top-8 right-8 bg-gradient-to-r from-[#6039F6] to-[#A31CFB] text-white text-[10px] font-bold px-2 py-1 rounded-full">
              01
            </span>
            <div className="w-20 h-20 bg-[#F3EFFF] rounded-full flex items-center justify-center mb-8">
              <img src="/user.png" alt="" />
            </div>
            <h3 className="text-2xl font-bold text-[#111827] mb-4">
              Create Account
            </h3>
            <p className="text-slate-400 leading-relaxed max-w-[240px]">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>

          <div className="relative bg-white border border-slate-100 rounded-[20px] p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <span className="absolute top-8 right-8 bg-gradient-to-r from-[#6039F6] to-[#A31CFB] text-white text-[10px] font-bold px-2 py-1 rounded-full">
              02
            </span>
            <div className="w-20 h-20 bg-[#F3EFFF] rounded-full flex items-center justify-center mb-8">
              <img src="/package.png" alt="" />
            </div>
            <h3 className="text-2xl font-bold text-[#111827] mb-4">
              Choose Products
            </h3>
            <p className="text-slate-400 leading-relaxed max-w-[240px]">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          <div className="relative bg-white border border-slate-100 rounded-[20px] p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <span className="absolute top-8 right-8 bg-gradient-to-r from-[#6039F6] to-[#A31CFB] text-white text-[10px] font-bold px-2 py-1 rounded-full">
              03
            </span>
            <div className="w-20 h-20 bg-[#F3EFFF] rounded-full flex items-center justify-center mb-8">
              <img src="/rocket.png" alt="" />
            </div>
            <h3 className="text-2xl font-bold text-[#111827] mb-4">
              Start Creating
            </h3>
            <p className="text-slate-400 leading-relaxed max-w-[240px]">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
